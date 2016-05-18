---
layout: post
title: This one crazy tip will help you write gold-plated tests!!!1!
summary: Seriously, they'll poop rainbows.
date: 2016-05-18 20:17:36
comments: true
published: true
categories:
- javascript
- testing
---

This is my tip to help you write better tests, be they unit or integration or functional or unicorn tests.

TDD is a three step process. You use the :vertical_traffic_light: traffic lights:

* :heart: Red: write a failing test
* :yellow_heart: Amber: make the test pass
* :green_heart: Green: improve the code you've just written, refactor

Or maybe red -> green -> refactor. My advice to you (even if you're writing your tests afterwards and not doing TDD) is never to skip the red test step.

Write a test for the feature you're about to implement, and then run it and watch it fail. Write the code to make it pass.

If you ever have a test that passes that surprises you, try and break to ensure the code you wrote or even the test itself does what you expect.

Why do I recommend this? You might be writing the equivalent of `expect(true).toEqual(true)` in your tests, pointless. You might not have tested the feature you think you have. You might have written a lovely test case that doesn't do anything, or doesn't behave as you expect, but because your tests are green you think everything is OK. It's important while you're writing your tests to break them to double check everything is working as you expect.
