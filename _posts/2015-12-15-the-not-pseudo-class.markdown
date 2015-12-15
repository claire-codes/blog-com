---
layout: post
title: "The :not() pseudo-class"
date: 2015-12-15 00:00:01 +0000
comments: true
categories: 
published: true
---
<style>
img {
    border: 1px solid #dcdcdc;
    border-radius: 3px;
}
</style>
How do you use CSS to style a particular element differently from other similar elements? You'd stick a class or ID on it, like so:

{% highlight html %}
<style>
.special {
    color: red;
}
</style>

<p>Normal</p>
<p>Normal</p>
<p class="special">Special</p>
<p>Normal</p>
<p>Normal</p>
{% endhighlight %}

![A special class](/assets/without-not.png "A special class")

But what if you have the opposite problem - you want to _exclude_ an element from a particular style?

You could do something clunky like adding a default class and override your custom class, but why not use the handy `:not()` CSS pseudo-class instead:

{% highlight html %}
<style>
p:not(.special) {
    color: red;
}
</style>

<p>Normal</p>
<p>Normal</p>
<p class="special">Special</p>
<p>Normal</p>
<p>Normal</p>
{% endhighlight %}

![Excluding an element with :not()](/assets/with-not.png "Excluding an element with :not()")

In one selector you can apply a style to all the elements except for ones that match the selector within the `:not()`. Clever eh?
