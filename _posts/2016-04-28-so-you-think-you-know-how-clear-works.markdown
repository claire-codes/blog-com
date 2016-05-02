---
layout: post
title: So you think you know how clear works?
date: 2016-04-28 16:03:12
comments: true
published: true
categories:
- css
---

<div class="tldr">
    <h2>TL;DR</h2>
    <ul>
        <li>Applies only to the element <strong>preceding</strong> the one it's applied to</li>
        <li>Bear in mind the direction elements are floating in as to whether you need <code>clear: left</code> or <code>clear: right</code></li>
   </ul>
</div>

I thought I understood the `clear` property in CSS, but it turns out I didn't.

Take 3 divs. Let's float them side-by-side (excuse the pseudo-HTML):

{% highlight html %}
<style>
.left {
    float: left;
}
</style>
<div class="left">BOX 1</div>
<div class="left">BOX 2</div>
<div class="left">BOX 3</div>
{% endhighlight %}

They will now look something like this on the screen:

{% highlight html %}
BOX 1BOX2 BOX 3
{% endhighlight %}

Now let's clear box 2:

{% highlight html %}
<style>
.left {
    float: left;
}
.cleared {
    clear: both;
}
</style>
<div class="left">BOX 1</div>
<div class="left cleared">BOX 2</div>
<div class="left">BOX 3</div>
{% endhighlight %}

How do expect the divs to display now? Think about it for a second ...

If you think that they will all be on different lines, then you're wrong! In fact, they now look like this:

{% highlight html %}
BOX 1
BOX 2BOX 3
{% endhighlight %}

Play along at home in JSBin or JSFiddle if you don't believe me. So why is this? The key lies in the [MDN docs](https://developer.mozilla.org/en/docs/Web/CSS/clear):

> The clear CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The clear property applies to both floating and non-floating elements.

See it? It's that word __precede__. It means that the element the property is applied to doesn't want to be next to any floats, b ut only if they are in front of it. It doesn't care if the element immediately after it floats, hence why Box 2 and 3 are adjacent. So the `clear: both` is a slight red herring in that it will only apply in one direction. Using `both` is like safe-guarding because ...

Remember that 'preceding' looks different depending which direction you're floating in: let's float the boxes right and see what happens now:

{% highlight html %}
<style>
.right {
    float: right;
}
.cleared {
    clear: both;
}
</style>
<div class="right">BOX 1</div>
<div class="right cleared">BOX 2</div>
<div class="right">BOX 3</div>

<!-- Now look like: -->

                 BOX 1
            BOX 3BOX 2
{% endhighlight %}

The order is due to the divs being floated right, and Box 2 still only cares about preceding elements, i.e. Box 1. In the both examples, try changing `clear:both` to `clear: left` to understand this more.