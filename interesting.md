---
layout: page
title: What I'm interested in
permalink: /interesting/
---

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
