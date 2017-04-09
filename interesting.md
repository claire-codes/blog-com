---
layout: page
title: Current Interests
permalink: /interesting/
tags: interesting
---

<p>
This is an experiment to record areas of web development I'm interested in right now and things I have been intersted in. I might be covering them as part of work or something may have piqued my interest from a tweet or a Frontend Focus article.
</p>

<p>
Just because I've listed something doesn't mean I've covered it in any great detail or even at all - it's an attempt at keeping focussed on a couple of topics at a time without being overwhelmed by the vast amount of really interesting Things I want to learn about and then learning about none of them.
</p>

<ul class="posts">
{% for post in site.posts %}
    {% if post.categories contains 'interesting' %}
        <li><span>{{ post.date | date: site.date_format }}</span>
            <ul>
                {% for interest in post.interests %}
                    <li>&raquo; {{ interest }}</li>
                {% endfor %}
            </ul>
        </li>
    {% endif %}
{% endfor %}
</ul>
