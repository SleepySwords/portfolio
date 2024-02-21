#!/bin/bash

cd sleepyswords.github.io &&
ls | grep -xv "CNAME" | xargs rm -r &&
cd ../ &&
yarn build &&
cp -r out/* ./sleepyswords.github.io/ &&
cd sleepyswords.github.io &&
git stage . &&
git commit -m "$@" &&
git push
