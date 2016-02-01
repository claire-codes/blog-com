---
layout: post
title: "npm all the things!"
date: 2016-02-01 21:43:35 +0000
comments: true
categories: javascript
---

Are you one of those suckers still downloading zip files of libraries to include in their JavaScript projects? Well you don't have to be! Leverage the power of the command line today and `npm` that thing!

## An example

`npm init` in your project's root and set up your `package.json`. You can use the defualts if you want! I don't care! Now just start npm-install-ing the libraries you need for your app.

Using Backbone? Alright then, just do

{% highlight bash %}
npm install backbone -S
{% endhighlight %}

So now you've got a new folder called `node_modules` and a subdirectory called `backbone`, where a bunch of Backbone.js related code lives. This means that all you need to do to use it is point your script tag to this directory, e.g. `<script src="../node_modules/backbone/backbone.js"></script>`. And if you're running a node application all you need to do is stick `require("backbone")` in you `.js` files. Look how quick and easy that was!

That `-S` flag means that as well as installing the module, you're also putting a reference to it in your `package.json` file under the `dependencies` property. This means that you, or anyone else can set up the project easily and install all it's required dependencies just by running `npm install` in the same directory as the `package.json` - trust me, your future-self will thank you for it.

That was so fun, let's do another one. How about writing some tests with Mocha and Chai?

{% highlight bash %}
npm install mocha -D
{% endhighlight %}

There's now another subdirectory alongside `backbone` in `node_modules` containing all the mocha code. Again, call it using a script tag, for example in your test runner file, or using the `require()` keyword for a node app.

The `-D` flag means save it in the `package.json` file, but this time in the `devDependencies` property, which, as you can guess is where we specify modules that we only need for development.

I'm getting tired now, let's save some keystrokes on this one:

{% highlight bash %}
npm i chai -D
{% endhighlight %}

Boom! `i` is just an alias for `install`. Look at you, you poweruser!

### Gotcha

But there's always an exception. Say you've got a module like `sinon` which is helpfully nice and modular and uses a file to require in all it's sub-modules: you won't be able to use this within a plain old script tag as the `require`s won't work. Instead you want to reference single concatenated and/or minified files. You _might_ have to download a library from the Internet like in the olden days.

But with that in mind ...

## Go forth and npm all the things

![NPM ALL THE THINGS!](/assets/allthethings.jpg "NPM ALL THE THINGS!")
