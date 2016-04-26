---
layout: post
title: How to chain functions in JavaScript
date: 2016-04-26 20:21:04
comments: true
published: true
categories:
- javascript
---

The chaining design pattern is lovely. :sunrise: It means we can call several methods on an object in one line of code.

Instead of (A) we have (B) :cake::

{% highlight javascript %}
// (A)
let sponge = new Cake();
sponge.mix();
sponge.bake();
sponge.eat();

// (B)
let sponge = new Cake().mix().bake().eat();
{% endhighlight %}

Basically, you need make a bunch of methods in an object and have them all return `this`. Have all the objects in:

1. an object
2. or a prototype

Make sure the methods modify some internal property and make a method that returns this property.

Returning `this` is key as you're returning the object that you want to call the next method on in the chain, i.e. this particular object.

## 1. Use an object

Set up an object that contains the variable you'll be amending and all your functions.

{% highlight javascript %}
let chainObj = {
    phrase: "",

    setPhrase: function(noun) {
        this.phrase = noun;
        return this;
    },

    shoutIt: function() {
        if (this.phrase) {
            this.phrase = this.phrase.toUpperCase();
        }
        return this;
    },

    makeItRed: function() {
        this.phrase = "red " + this.phrase;
        return this;
    },

    val: function() {
        var tmp = this.phrase;
        this.phrase = "";
        return tmp;
    }
};

let chainFoo = chainObj.setPhrase("foo").makeItRed().shoutIt().val();
// "RED FOO"
{% endhighlight %}

## 2. Use a prototype

I never touch prototypes, they frighten me a bit. But this approach still works.

{% highlight javascript %}
let ChainPrototype = function() {
    this.phrase = "";
};

ChainPrototype.prototype.setPhrase = function(noun) {
    this.phrase = noun;
    return this;
};

ChainPrototype.prototype.makeItRed = function() {
    if (this.phrase) {
        this.phrase = "red " + this.phrase;
    }
    return this;
};

ChainPrototype.prototype.shoutIt = function() {
    if (this.phrase) {
        this.phrase = this.phrase.toUpperCase();
    }
    return this;
};

let chainFoo = new ChainPrototype.setPhrase('foo').makeItRed().shoutIt().phrase;
// 'RED FOO'
{% endhighlight %}

Either way, you will need to call them on a certain object, use some sort of a setter to pass a parameter in, then a method that returns a the value you really want at the end - this method doesn't have to return `this` as it won't be chained.