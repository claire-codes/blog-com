---
layout: post
title: Tips for targeting your text searches in Atom
summary: Speed up Atom&#39;s slow file search by making use of glob patterns.
date: 2017-03-22 23:10:20
comments: true
published: true
categories:
- atom
---

Are you working on a large project in Atom? Dozens of directories? Thousands of files? Innumerable node modules? You may have discovered that Atom isn't the fatest editor out there when executing search queries across an entire project. Give Atom a helping hand by narrowing down the scope of its search with a few simple tricks.

<div class="c-tldr">
    <h2 class="c-tldr__title">TL;DR</h2>
    <ul>
        <li>Exclude a directory from your search by putting an exclamation point in front of its name: <code>!node_modules/</code></li>
        <li>Include or exclude several directories by separating their file paths with commas: <code>web/, !static/</code></li>
        <li>Search for for a particular file type in all subdirectories: <code>frontend/**/*.js</code></li>
   </ul>
</div>

_Note_: The trailing slashes are optional - I use them for clarity here to indicate a folder rather than a file.

Everything in Atom is a package. The search functionality is no different and lives in the core `find-and-replace` package. Open the Find and Replace panel by hitting <kbd>Cmd + Shift + F</kbd> in Mac or <kbd>Ctrl + Shift + F</kbd> in Windows. Your search term goes in the first box, and any of the patterns in the following tips are placed in the third "File/directory pattern" box.

## 1. Exclude gitignored files

Open the Core Settings menu and make sure the **Exclude VCS Ignored Paths** option is selected. Now every file and directory in your `.gitignore` file will be excluded from your search. Typically you would add the `node_modules/` directory in the `.gitignore` file so this can provide a big win for JavaScript based projects.

![Exclude VCS Ignored Paths setting](/assets/VCS-setting.png)

## 2. Search in a specific directory

Do you only want to search for the string "cheezeburger" in the `kittehs/` directory? Then enter this path in the Find and Replace panel before hitting return to narrow the search scope to this folder.

![Search only in this directory example](/assets/only-dir.png)

## 3. Search in multiple specific directories

Do you only want to search in either the `kittehs/` folder or the `doge/` folder? Then separate their paths with commas to search just within these directories.

![Search in multiple directories example](/assets/multi-dir.png)

## 4. Exclude specific directories from search

How about when you know you definitely don't want to search within a particular folder, but want to look everywhere else in the project? Perhaps you don't want to search within the `tests/` directory for your snippet of code. Perhaps you don't have a `.gitignore` file or the ability to exclude VCS ignored files from your search (👋 hello Magento 2 projects and the `vendor/` folder). You can simply exclude a directory from the scope of your search by putting its path in the 3rd field of the Find and Replace panel, but with an exclamation point in front of it instead.

For example, look everywhere but the `node_modules/` directory by just typing `!node_modules/` and running the search.

![Exclude a directory example](/assets/not-dir.png)

## 5. Include and exclude specific directories

You can combine the previous two techniques by separating the patterns with a comma.

![Combining including and excluding patterns example](/assets/multi-dir.png)

## 6. Search for file types within directories

You know that you can filter by file type by using the wildcard character and the file extension. To search only in JavaScript files type `*.js`. But say we want to look in JavaScript files in the `web/` directory. If we were to type `web/*.js`, this will only search for JavaScript files directly in the `web/` folder, and not in any of `web/`'s subdirectories (if it has any). To include all subdirectories in the search, use the globstar pattern instead: `web/**/*.js`

![File types with glob pattern example](/assets/glob.png)

These techniques make use of glob patterns, which are a useful skill to know and can be applied to many other editors and searching tools to save millions of milliseconds of your life when searching. ⏱


