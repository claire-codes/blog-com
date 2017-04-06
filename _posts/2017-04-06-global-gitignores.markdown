---
layout: post
title: Global Gitignores
summary: What are they, how you can make one, how you know they&#39;re working and whether they&#39;re a good idea
date: 2017-04-06 22:05:26
comments: true
published: true
categories:
- git
---

Do you get tired of typing out `echo node_modules/ > .gitignore` every time you create a new git repo? Do you always forget and commit those pesky node modules anyway? Never mind that `npm_debug.log` or `.DS_Store` (what even is that⁉️). Well help is at hand to save you yet more precious keystrokes. Create a ✨global gitignore✨ file which will be used by all your repos locally on your machine and you will never need to write a `.gitignore` file again!

## How

From the terminal (Bash shell on Mac OS X in my case):

```sh
# Make sure you're in your home directory
cd ~
# Create the file you'll use
touch .global_gitignore
# Add this in your global git config
git config --global core.excludesfile ~/.gitignore_global
# Double check it's set up :)
git config --global --get core.excludesfile
```

Use Vim or the command line editor of your choice to open this file and add all the stuff you want to ignore to the file in the form of glob patterns as you would in a normal `.gitignore` file. Github have a helpful repo with all sorts of examples at [https://github.com/github/gitignore](https://github.com/github/gitignore).

## How do I know it's working??

Say you added `node_modules/` to your global gitignore file. Create a new directory and run `git init` inside it. Run `mkdir node_modules`. When you run `git status` you won't see the new `node_modules/` directory in the output, because this repo is covered by the global gitignore. This can be confusing at first as you don't have any explicit delcarations inside the directory to prevent files and folders from being committed.

Alternative, go to an existing repo that contains a `.gitignore` file with the `node_modules/` pattern in it. Delete that line from the local gitignore. Run `git status` from the command line and you should still see that `node_modules/` is being ignored, and is not appearing on the `git status` results.

Having a global gitignore doesn't mean you can't or don't need to have a gitignore file locally in your project though. Use the local file to hold repo-specific files you want to ignore.

## Is this a good idea?

Meh depends. If you work on a lot of larger projects, e.g. for work or open source, then perhaps this isn't the best idea. Your global gitignore could clash with the project's gitignore file, causing you to remove files. If you work in isolation with your overzealous global gitignore and then others start to work with your project - then they'll just end creating a gitingore file locally to the project anyway.

In my opinion this is a small piece of conveinience to speed up local development when you quickly want to get up and running and Just Build Something ™ but shouldn't be relied upon in larger projects.
