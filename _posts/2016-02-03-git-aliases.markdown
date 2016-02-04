---
layout: post
title: "Git Aliases"
date: 2016-02-03 19:42:23 +0000
comments: true
categories:
- git
---
How many times do type out the same repetitive commands for Git every day? Want to save some keystrokes? Use a Git alias. Consider the very useful but very long:

{% highlight bash %}
git log --graph --oneline --decorate
{% endhighlight %}

What a mouthful. But all you need to do, from any directory at the command line, is type:

{% highlight bash %}
git config --global alias.plog 'log --graph --oneline --decorate'
{% endhighlight %}

Then from then on all you need to type is:

{% highlight bash %}
git plog
{% endhighlight %}

And this gives you the same output as the full version.

:open_mouth:

Git aliases are like shortcuts to common tasks. You can even alias already short commands, e.g.:

{% highlight bash %}
git config --global alias.s status
{% endhighlight %}

And this gives you the super quick:

{% highlight bash %}
git s
{% endhighlight %}

But wait! There's more!

I find myself wanting to add everything to staging in the current directory _except_ one particular file or folder. This can be cumbersome, adding everything separately and awkwardly avoiding that one pesky file. But there's a quicker way: add everything, then unstage the thing you don't want in the commit, for example `foo.txt`:

{% highlight bash %}
git add .
git reset foo.txt
{% endhighlight %}

Then quickly type `git status` - wait, I mean, `git s` now isn't it? - to verify before `git commit`-ing.

But that feels like a lot of keystrokes for what feels like one action (yes I am lazy). So let's take our time-saving to new level and write a script to do it for us. I'm using a Mac with Bash installed, so I've put the following script in `/usr/local/bin` and called it `allExcept`:

{% highlight bash %}
#!/usr/bin/env bash

git add .
git reset $1
git status
{% endhighlight %}

I run `chmod 777` against the script to make sure it's executable, then all I need to call the script. I type the name of the script followed by the filename to exclude, like:

{% highlight bash %}
allExcept dont-add-me.txt
{% endhighlight %}

The `$1` is the first argument to the script. The commands are executed and the status of the repo is printed out to the console. Boom! :punch::boom: What else could you create a shortcut for? It doesn't have to be Git-related, it could be any sequence of shell commands. :shell:

For lots more Git tips and tricks, check out the Pro Git book, including the article on aliases:

[https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)
