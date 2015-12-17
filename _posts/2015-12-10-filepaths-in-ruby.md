---
layout: post
title: "Filepaths in Ruby"
date: 2015-12-02 00:00:01 +0000
comments: true
categories: 
published: false
---


### File paths in Ruby

You've got a file, but where does it live? Which directory are _you_ in? Where am I?

For the purposes of the examples, imagine you're executing a file called `foo.rb` which lives in the file system at `/Users/me/myDir/foo.rb`. You're located in `/Users/me/myDir` and you've executed the command `ruby foo.rb` from the terminal.

Remember: 
* _absolute path_ - the full path of the file in the file system: it starts with the root directory and includes all the directories between it and the file in question. 
* _relative path_ - a partial representation of the absolute path because it starts from some other directory. An example would be `../myDir/foo.rb`.

### WTF is `__FILE__`

You've probably seen this keyword used in Ruby. `__FILE__` is a constant that represents the name of the file that is currently executing. In our example it's `foo.rb`.

### How do I get the absolute path name of the currently executing file?

Now we know the name of the currently executing file, we can pass it to the `expand_path` method of the `File` class, which returns the absolute pathname of either a file or relative pathname.

```ruby
File.expand_path(__FILE__)
  => "/Users/my/myDir/foo.rb"
```

### How do I find the absolute directory name of the currently executing file?

If you aren't interested in the pathname and want the absolute directory without the filename, combine the previous method with `dirname`.

```ruby
File.dirname(File.expand_path(__FILE__))
# Or also ...
File.expand_path(File.dirname(__FILE__))
  => "/Users/my/myDir"
```

### What's the working directory and how do I find it?

This is the folder you are currently in - nothing to do with the file that is executing. Use `Dir.pwd` to get it.

### OMG I've always wanted to know - what's the best way to make a path name out of lots of different strings??

Well you might have tried `['a','b','c'].join('/')`, but you'd be wrong!

`File.join()` concatenates arguments with a single slash, and will ensure that there is only one slash between each argument, saving you a job.

```ruby
File.join('a','b') => 'a/b'
File.join('a/','b') => 'a/b'
File.join('a/','/b') => 'a/b'
```

### `expand_path` bonus time!

So you already know that `File.expand_path` returns the absolute path of the 1st argument. But if you provide a 2nd argument it will find the absolute path of the 1st argument relative to the 2nd argument. Get that?

So `File.expand_path('../lib', __FILE__)` gets the path to the lib directory _relative_ to the currently executing file, meaning you don't have to worry about where you actually are when finding paths.

### So what does that $LOAD_PATH line do?

Well now you know.

```
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
```
### But `__dir__`?



Get the current directory of the file you're executing with File.dirname(__FILE__)
__FILE__ = "(irb)"
File.dirname(__FILE__) = "."
File.expand_path(File.dirname(__FILE__)) = "/Users/me/cur_dir"
File.dirname(File.expand_path(__FILE__)) = "/Users/me/cur_dir"

### How do I know that you're not talking baloney?

Whip up a quick rb file and put the following:
```ruby

```

_Fin._


#### The following StackOverflow answers were upvoted during the making of this blog post:
* http://stackoverflow.com/questions/4474918/file-expand-path-gemfile-file-how-does-this-work-where-is-the-fil
* https://tomafro.net/2010/01/tip-relative-paths-with-file-expand-path
* http://stackoverflow.com/questions/9416578/relative-path-to-your-project-directory