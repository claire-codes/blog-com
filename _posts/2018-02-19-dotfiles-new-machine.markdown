---
layout: post
title: "Do your own dotfiles"
summary: "Dotfiles are invaluable when setting up a new machine. Keep them in a format that's easy to understand for you rather than forked from a rockstar developer hero."
date: 2018-02-19 21:35:19
comments: true
published: true
categories:
- git
---

A new job brings lots of changes, including a new laptop or computer. I'm lucky enough to have been able to use a MacBook in my last three jobs. (Once you go Mac you never go back!) I started a new job the other week and found myself starting from scratch again. I downloaded my editor of choice (still Atom), replaced Terminal with iTerm2 and installed some other handy apps.

I used my [dotfiles](https://github.com/claireparker/dotfiles) to customise my terminal prompt, and thanked Past Claire for committing it to the repo. Shell scripts can look like hieroglyphics when you're not using them every day. All I had to do was copy and paste the code into the `.bashrc` file on my new machine , restart iTerm and I was greeted by my familiar prompt.

But there was one terminal shortcut I used to use all the time that I was missing. I used to type ‘git s’ instead of ‘git status’ to see the current state of the files in my branch from the command line. I couldn’t find a definition for it in my dot files repo, so I tried to do it with a bash alias, like `alias "git s"="git status"`. This was invalid though as you aren't allowed any spaces in the alias name itself.

So I spent a couple of days retraining my fingers with a slightly amended alias of `gits` for `git status` instead.

I eventually stumbled across a tweet that mentioned [git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) and the lightbulb above my head turned on! 🤔💡 That was the method I'd used before. I quickly replaced `gits` with `git s` and have spent the last few days re-retraining my fingers to type `git s` again!

```sh
$ git config --global alias.s status
```

This may sound more like a mundane diary entry rather than a useful technical blog post, but the lessons I learnt from this situation were:

- keep your dotfiles up-to-date
- your dotfiles repo can take any format you like

The reason I'd never committed the git alias to my dotfiles was that I'd set it from the command line previously, and so never thought it fit into the general format of a dotfiles repo. I had a misconception that dotfiles should only contain script-like files. (It turns out that git aliases live in the `~/.gitconfig` file so that was my second misconception.) It really doesn't matter what format the dotfiles repo takes, as long as it's useful for you. The point of a dotfiles repo to me is to make it easier for Future Claire to quickly replicate useful settings on a fresh machine, and not to show off how many unused shortcuts she has for Vim. If a markdown file with a list of commands is helpful for you, then add that to your dotfiles. If you prefer a setup that you could clone directly to your machine and run immediately, then add that to your dotfiles instead.

With this in mind I added a couple of text files to the repo, with lists of applications I commonly install and packages I currently have in Atom. I also added a folder to hold git-related notes, including one about how to setup aliases and a template gitignore file. Hopefully this means next time I won't spend days typing out the wrong command for `git status`.

[Here's a link to my dotfiles.](https://github.com/claireparker/dotfiles)