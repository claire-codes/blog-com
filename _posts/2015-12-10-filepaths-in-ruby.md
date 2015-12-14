---
layout: post
title: "Filepaths in Ruby"
date: 2015-12-02 00:00:01 +0000
comments: true
categories: 
published: false
---

### File paths in Ruby

Some basics on file paths. Imagine you're executing a file called `foo.rb` and this file is in the `myDir` directory and you can find it in the file system at `/Users/me/myDir/foo.rb`. You're located in `/Users/me/myDir` and you've executed the command `ruby foo.rb` from the terminal.

Remember: _absolute path_ = ... and _relative path_ = ...

### WTF is `__FILE__`

`__FILE__` is a constant that represents the name of the file that is currently executing. In our example it's `foo.rb`.

### What's the absolute path name of the currently executing file?

Now we know the name of the currently executing file, we can pass it to the `expand_path` method of the `File` class, which returns the absolute pathname of a file or relative pathname.

`File.expand_path(__FILE__)`

### What's the absolute directory name of the currently executing file?

If you aren't interested in the pathname and want the absolute directory without the filename, use `dirname`.

`File.dirname(File.expand_path(__FILE__))`

Or also ...

`File.expand_path(File.dirname(__FILE__))`

### What's the working directory and how to I get it?

This is the folder you are currently in - nothing to do with the file that is executing.

### How do I know that you're not talking baloney?

Whip up a quick rb file and put the following:
```ruby

```
### Is there a quicker way to make a filename?

What if you don't know which of your arguments have slashes? If you try .jion('/') it might mess it up. Instead try File.join():

File.join() concatenates arguments with a single slash, and will ensure the resuly only has a single slash:

```
File.join('a','b') => 'a/b'
File.join('a/','b') => 'a/b'
File.join('a/','/b') => 'a/b'
```

### Bonus

File.expand_path returns the absolute path of the 1st argument.
If you provide a second argument it will find the absolute path of the first arg relative to the second arg.
So `File.expand_path('../lib', __FILE__)` gets the path to lib relative to the currently executing file, meaning you don't have to worry about where you actually are.

`File.expand_path('../lib', __FILE__)`

### But `__dir__`?



### So what does that $LOAD_PATH line do?

```
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
```


Get the current directory of the file you're executing with File.dirname(__FILE__)
__FILE__ = "(irb)"
File.dirname(__FILE__) = "."
File.expand_path(File.dirname(__FILE__)) = "/Users/me/cur_dir"
File.dirname(File.expand_path(__FILE__)) = "/Users/me/cur_dir"




#### The following StackOverflow answers were upvoted during the making of this blog post:
* http://stackoverflow.com/questions/4474918/file-expand-path-gemfile-file-how-does-this-work-where-is-the-fil
* https://tomafro.net/2010/01/tip-relative-paths-with-file-expand-path
* http://stackoverflow.com/questions/9416578/relative-path-to-your-project-directory