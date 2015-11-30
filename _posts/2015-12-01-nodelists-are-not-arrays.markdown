---
layout: post
title: "NodeLists are not Arrays"
date: 2015-12-01 00:00:16 +0100
comments: true
categories: 
published: false
---
# Nodelists are not Arrays

When you're working with the DOM, it's tempting to think that when you select a group of elements from the page that you've got an array. Wrong! It might look like a duck and walk like a duck, but it moos like a cow.

Try this in your browser console:

```
>var whoami = document.querySelectorAll('div');
> Object.getPrototypeOf(whoami)
NodeList {}
```

Compare this with:

```
var standardArray = [1,2,3];
Object.getPrototypeOf(standardArray);
Array {}
```

The `Object.getPrototypeOf()` method returns the object from which the current object inherits from. You can call this repeatedly to reach Object and finally null.

Unfortunately this means that you miss out on all the lovely array methods like filter, map and forEach loops. If you want to do anything to this Nodelist you'll be doing it with a standard for-loop sorry!

### What is a Nodelist and what can I do with it?

All you can do with a Nodelist out the box is for loop and length.

A Nodelist is ...

We can see what methods the object inherits from its prototype by executing hasOwnProperties ...

### Workarounds


### ES6 Workarounds

typeof x
Object.prototype.toString.call(true)


Workarounds are ...
* Converting to an array using slice http://www.javascriptkit.com/javatutors/arrayprototypeslice.shtml
ES6 workarounds are ...
https://developer.mozilla.org/en/docs/Web/API/NodeList
http://duruk.net/nodelists-and-arrays-in-javascript/
http://blog.kevinchisholm.com/javascript/javascript-object-inspection-with-object-getownpropertynames/
Mention JavaScript somewhere