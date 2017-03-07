---
layout: post
title: Improving colour contrast ratios in Atom
summary: How to make it a bit more usable. And yes, I spell colour with a &#34;u&#34;!
date: 2017-03-07 20:58:17
comments: true
published: false
categories:
-
---

Atom is an open-source text editor and is as customisable as you'd expect a piece of open-source software to be, even if making those customisations isn't always the most straightforward job it could be. But hey, that's frontend web development for you.

My problem with Atom today was the the illegibility of the gitignored file and folder names in the tree view. Atom helpfully gives files and folders in your gitignore file a darker colour compared to those that aren't gitignored, so that you can visually distinguish them. However, I find the resulting colour contrast difficult to read. Just because a file is gitignored doesn't mean I won't want to interact with it. So off I set on a quest to make my life easier.

Here's an image of how it looks by default on my Mac, using Atom 1.13.1 version and the One Dark UI and Syntax theme.

![Original tree view colours](/assets/originalTreeView.png)

### Just change your theme woman!

You could just go to the Install Packages menu and find and install a different theme that may have a nicer colour scheme that you find easier to read. However, you still may want to tweak the styles somewhat, and the following method is how to do it. Plus you'll understand a bit more about colour contrasts!

The image above shows you how untouched files look, folders that are new since my last git commit, files that have been edited since my last git commit, and how folders that are included in my gitignore file look. The reason that gitignored filenames are more difficult to read compared to the other names is because the colour contrast between the background colour and text colour is low. Let's improve that.

## Find out your current colour contrast ratio

Atom is just a browser behind the scenes: press the same keyboard command as you would in Chrome to open Chrome Dev Tools (Cmd + Alt + I on Mac). Using the normal Select element tools, hover over the tree view background and the filenames and find out what colour they use for display. You may need to dig around in the Computed styles tab as the DOM in the Atom editor is quite verbose.

![Inspecting tree view styles](assets/inspectingOriginalTreeView.png)

Once you have both of those values, open a good colour contrast ratio calculator tool on the web. I enjoyed using both Lea Verou's [contrast ratio](http://leaverou.github.io/contrast-ratio/) and the excellent [WebAIM Color Contrast Checker](http://webaim.org/resources/contrastchecker/). Slot your values in the appropriate values and you will see the ratio. You may need to convert the rsla colour values to RGB. In that case I like to use HSL color Picker which gives me the colour in different formats and gives a cool slider.

You'll see that the ratio is less than ideal. Now it's up to you to play around with colours and ratios to find a colour that you like for your gitignored files.

While you're at it, you might want to check the ratio of regular files. I noticed that this was also bad so using the Brighten button WebAIM I made this a little clearer.

## Change your colours in Atom

Atom has a stylesheet that contains user-specific style customisations. This is where we should put our colour changes. The stylesheet is accessible from the main Atom menu. Using Dev tools again, work out which selectors you need to apply the new styles and write a new Less style. You should see you changes as soon as you hit Save and give it a second to recompile.

Now you have this instead (image)

My stylesheet looks like this.

### Bonus

I use the back up sync package to save all my settings in a Gist so that I can share them between machines.
