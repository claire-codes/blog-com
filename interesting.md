---
layout: page
title: Current Interests
permalink: /interesting/
tags: interesting
---

<p>
👩🏼‍🔬 This page is an experiment where I can record areas of web development I'm interested in right now and keep track of past topics too. Subjects might be inspired by a tweet, or a Frontend Focus link or something I've come across while coding.
</p>

<p>
I imagine using this as a terse diary of what I was working on and as inspiration for future reading or projects.
</p>

<ul class="c-interesting">
{% for post in site.posts %}
    {% if post.categories contains 'interesting' %}
        <li class="c-interesting__post"><h2 class="c-interesting__date">{{ post.date | date: site.date_format }}</h2>
            <ul class="c-interesting__list">
                {% for interest in post.interests %}
                    <li class="c-interesting__interest">{{ interest | markdownify }}</li>
                {% endfor %}
            </ul>
        </li>
    {% endif %}
{% endfor %}
</ul>
