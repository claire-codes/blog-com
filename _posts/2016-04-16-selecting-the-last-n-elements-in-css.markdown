---
layout: post
title: Selecting the last n elements in CSS
date: 2016-04-16 16:25:27
comments: true
published: true
categories:
- css
---

Let's a take a bog-standard list: :toilet::clipboard:

{% highlight html %}
<ul>
    <li>Doris Lessing</li>
    <li>Angela Carter</li>
    <li>Ann Patchett</li>
    <li>Iris Murdoch</li>
</ul>
{% endhighlight %}

Quick, off the top of your head: :older_man:

* How would you select only the last list item? `li:last-child`
* What if we added another item to the list. How would you select the last _two_ elements? `li:nth-last-child(-n+2)`
* A final list element is added: there's now 6 li's and we want only the last three. How do we do that? We need yet another selector: `li:nth-child(n+4)`

But actually, we could have used that last selector all along and it would have been more resistant to the changing structure of the list considering our requirements: we always wanted to miss the first 3 elements and select anything after them, regardless of how many there were.

On the other hand :wave:, what about if the list was changing length but you always wanted the last 3 elements? You could have stuck with `nth-last-child(-n+3)`. See, depends on your requirements and how you phrase the question.

### Aside

People get snobby about using w3schools resources but I love the "Try it yourself" examples for playing around with selectors like this: they're easy to google for an example you want and simple to modify. Spend less time being critical and elitist and putting beginners off just so you sound like you know what you're talking about and more time writing code! :nose: _Fin._

### Read more :notebook_with_decorative_cover:

* [http://stackoverflow.com/questions/4844456/is-it-possible-to-select-the-last-n-items-with-nth-child](http://stackoverflow.com/questions/4844456/is-it-possible-to-select-the-last-n-items-with-nth-child)
* [https://css-tricks.com/useful-nth-child-recipies/](https://css-tricks.com/useful-nth-child-recipies/)
* [http://www.w3schools.com/cssref/sel_nth-last-child.asp](http://www.w3schools.com/cssref/sel_nth-last-child.asp)
