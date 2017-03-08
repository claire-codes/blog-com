---
layout: post
title: Improving colour contrast ratios in Atom
summary: How to make it a bit more usable. And yes, I spell colour with a &#34;u&#34;! 🇬🇧
date: 2017-03-07 20:58:17
comments: true
published: true
categories:
- atom
---

Atom is an open source text editor and is as customisable as you'd expect a piece of open source software to be. You can not only choose from the plethora of themes built by the community, but further tweak the styles to your liking.

I'm not normally an adventurous person in terms of theming or customising my devices, but something about the UI in Atom was really bugging me: the readability of the gitignored file and folder names in the tree view in terms of colour. Atom helpfully gives files and folders in your `.gitignore` file a darker colour compared to those that aren't gitignored, so that you can visually distinguish them. However, I find the resulting colour contrast difficult to read. Day to day I work on large codebases that have a lot of generated content that isn't committed to the git repo, but with which I still need to navigate round, so I set about working out to change the colour to something easier on the eyes 👀.

Here's an image of how it originally looked on my Mac, using Atom 1.13.1 version and the One Dark UI and Syntax themes.

![Original tree view colours](/assets/originalTreeView.png)

The image above shows from top to bottom, examples of how untouched files look, folders that are new since my last git commit, files that have been edited since my last git commit and how folders that are included in my `.gitignore` file look. The reason that gitignored filenames are more difficult to read compared to the other names is because the colour contrast between the background colour and text colour is low. Let's improve that.

## Find out your current colour contrast ratio

Atom is just a browser behind the scenes: press the same keyboard command as you would in Chrome to open Chrome Dev Tools (Cmd + Alt + I on Mac). Using the normal Select element tool, hover over the tree view background and the filenames and find out which colours they use for display. You may need to dig around in the Computed Styles tab as the DOM in the Atom editor can be quite verbose.

![Inspecting tree view styles](/assets/inspectingOriginalTreeView.png)

Once you have both of those values, open a good colour contrast ratio calculator tool on the web. I enjoyed using both Lea Verou's [contrast ratio](http://leaverou.github.io/contrast-ratio/) and the excellent [WebAIM Color Contrast Checker](http://webaim.org/resources/contrastchecker/). Slot your values in the appropriate input fields to discover the resulting contrast ratio.

**Note:** You may need to convert the rgba colour to the equivalent hex format, for example the tree view titles returned a value of `rgba(157, 165, 180, 0.6)` for me. In that case I like to use [HSL color Picker](http://hslpicker.com/) which gives me the colour in different formats and a snazzy slider tool that I can use to choose new colours!

![WebAIM site colour contrast ratio results](/assets/WebAimExample.png)

The image above shows my results for the gitignored text against the tree view background. You'll see that the ratio is less than ideal. Now it's up to you to play around with colours and ratios to find a colour that you like for your gitignored files.

While you're at it, you might want to check the ratio of regular files. I noticed that the contrast ratio was also less than ideal so using the Brighten button WebAIM I made the text colour a little whiter.

## Change your colours in Atom

Atom has a stylesheet that contains user-specific style customisations. This is where we should put our colour changes. The stylesheet is accessible from the main Atom menu in the Menu bar on a Mac: just open Atom > Stylesheet... . Using Dev tools again, work out which selectors you need to apply the new styles and write a new Less style. You should see you changes as soon as you hit Save and give it a second to recompile.

My selectors look something like this:

```css
// Change tree view colours to create WCAG AAA standard contrast
.list-group li.list-nested-item.selected > .list-item,
.list-group li.list-nested-item > .list-item,
.list-group li:not(.list-nested-item).selected,
.list-group li:not(.list-nested-item),
.list-tree li.list-nested-item.selected.status-ignored > .list-item,
.list-tree li.list-nested-item > .list-item,
.list-tree li:not(.list-nested-item).selected,
.list-tree li:not(.list-nested-item) {
    color: #d1d5dc;
}

// This is for gitignored files in the tree view.
// It doesn't quite make AAA standard but it's AA, and is distiguishab;e from the non-gitignored files
.list-group li.list-nested-item.selected.status-ignored > .list-item,
.list-group li.list-nested-item.status-ignored > .list-item,
.list-group li:not(.list-nested-item).selected.status-ignored,
.list-group li:not(.list-nested-item).status-ignored,
.list-tree li.list-nested-item.selected.status-ignored > .list-item,
.list-tree li.list-nested-item.status-ignored > .list-item,
.list-tree li:not(.list-nested-item).selected.status-ignored,
.list-tree li:not(.list-nested-item).status-ignored {
    color: #c09194;
}
```

And my resulting colours in the tree view look like this:

![Final tree view colours](/assets/finalTreeView.png)

Why stop there though? How about making that green for new files a pop a little more? Or change the tab name titles? Or even comments in files which are pretty much unreadable for me in this theme unless I squint!


### Why don't you just change your theme!?

Of course, you could just go to the Install Packages menu and find and install a different theme that may have a nicer colour scheme that you find easier to read. But there may be elements of that theme that you'd like to customise, and isn't it cool interacting with a desktop application through Dev tools??

### Bonus

I use the [sync-settings](https://atom.io/packages/sync-settings) package to save all my settings in a Gist so that I can share them between machines. This includes this stylesheet I worked on in this post.
