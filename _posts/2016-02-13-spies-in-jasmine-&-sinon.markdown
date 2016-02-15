---
layout: post
title: Spies in Jasmine &amp; Sinon
date: 2016-02-13 18:13:45
comments: true
published: true
categories:
- javascript
---

<div class="tldr">
    <h2>TL;DR</h2>
    <ul>
        <li>Jasmine & Sinon may seem like they have similar APIs, but they are not identical</li>
        <li>The equivalent of Sinon's <code>sinon.spy(foo,'bar')</code> in Jasmine is <code>spyOn(foo,'bar').and.callThrough()</code></li>
    </ul>
</div>

So you're testing. In JavaScript. Perhaps you want to test:

* whether a method has been called
* what arguments the method was called with
* what the method returns

A reasonable request. You turn to your testing framework and it turns back to you and it says "Bob, you need to use a spy." Fine.

Maybe you have to use Jasmine as your testing framework at work, but really you find Mocha + Chai more readable, so you use that for your personal projects. Fine, your choice. Just don't forget that Mocha doesn't come with spies built-in, so you need to use another library to provide that. You choose Sinon because ... everyone else does so it's easy to google an answer. Fine. But _then_ you make the naive mistake of thinking the APIs for Mocha/Chai/Sinon and Jasmine are the same! Nope. Observe.

## Jasmine Spy !== Sinon Spy

### Spies

A Sinon spy calls the original implementation of a method **by default**, whereas you have to **explicitly request** this behaviour with Jasmine:

| Jasmine | Sinon |
| --- | --- |
| `spyOn(foo,'bar').and.callThrough()` | `sinon.spy(foo,'bar')` |

*N.B. The new chainable syntax in Jasmine 2.0*

What does this mean? It means that when you spy on the `bar()` method, the actual method still executes. The alternative in Jasmine is just to call `spyOn(foo,'bar')`, which will just stub `bar()`: it will be called, and the code that calls it will run, but the actual `bar()` method itself will not run.

### Stubs

How about if you want to 'stub' out the return value of your method, so that it returns a set value every time? Jasmine and Sinon do this pretty differently too:

| Jasmine | Sinon |
| --- | --- |
| `spyOn(foo,'bar').and.returnValue(42)`| `sinon.stub(foo,'bar').returns(42)` |

Sinon's API makes use of a different method now, `stub()`, whereas Jasmine chains onto the original 'spy', but they both do effectively the same thing.

### What's your point?

You say tomato, I say tomato.

One man's stub is another man's mock, which is another man's spy. When you assume that you know that you know what that testing framework is talking about, you make an __ASS__ out of __U__ and __ME__.

_This post was inspired by the day I lost wondering why my Jasmine spy wasn't behaving how I thought it should. Curse you `.and.callThrough()`!!_

### Read more

* [Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)
* [Sinon](http://sinonjs.org/)
* [Mocha]()
* [Chai]()
