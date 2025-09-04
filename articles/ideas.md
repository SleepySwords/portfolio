---
title: Brilliant ideas at 5am
date: 2025-06-17
---

# fish my beloved

The shell I currently use is fish, it's lovely has pretty nice defaults and
looks very pretty. However, there is an issue. The vi-mode disappears whenever
the previous command was entered in block mode. Using vim exclusively with the
cursor shapes, I really on it to tell me what mode I am currently in. So it
defaulting to the insert mode shape is a huge issue for me.

# ZSH

That is why I transitioned to zsh, setting up zsh to look and behave like fish
took a while. In addition to that, my single problem split into two problems.
Pressing up and down on the keyboard does something weird, it's like a partial
history? I don't even know anymore. In addition, the startup time takes
forever. However, there are some nice git integrations, that is probably why it
is slowing it down. I think it was the reason why it slowed down before and why
I switched back...

# The brilliant idea

So both shells have their issues. When typing `fish` within zsh, I noticed
something. My block issue is gone. That is when my sleep deprived brain got a
sneaky idea. Why doesn't zsh just launch fish. So in my `.zshrc` there is a
single line, and that line is fish. This does have a problem however, exiting
this shell by pressing `<C-d>` or exit does not leave the shell. This is when
another lightbulb hit me. After, the fish line exists the exit line. How
splendid, now my fish shell works perfectly despite living in this quite cursed
environment.

So now I am using this hacky workaround. However, neovide complains about not
being able to nvim, probably because we jump straight into fish on startup.

# Update

Found out if you add `shell-integration = none` into the ghostty config it
works the intended way. Not really sure why that happens, perhaps something is
wrong with the fish shell integration? But being able to remove this hacky
config was way nicer, now I am able to use neovide freely.
