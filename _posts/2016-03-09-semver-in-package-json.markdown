---
layout: post
title: Semver in package.json
date: 2016-03-09 21:56:35
comments: true
published: true
categories:
- javascript
---
If you take a look at the `dependencies` or `devDependencies` properties in a `package.json` file you might have noticed unexpected characters next to the package versions:

{% highlight json %}
"dependencies": {
  "backbone": "^1.3.1",
  "express": "^4.13.4"
}
{% endhighlight %}

## Semver

Package versioning works on the principle of semantic versioning, or "semver". When you publish a new version of a module or package you should update the version number, but follow semver conventions. It can be a major, minor or patch release. A version number is made up of three figures representing the current increment:

{% highlight bash %}
MAJOR.MINOR.PATCH
{% endhighlight %}

Quoting directly from [semver.org/](http://semver.org/), release a:

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

## Carets & Tildes & Ranges, Oh my! :cat: :tiger: :bear:

So you've installed a dependency to your app using npm, but you want to specify what version is used. Add the following symbols in front of the version number:

| Symbol | Meaning |
|--|--|
|>, <, >=, <=|Use one or combine a two to create an acceptable range.|
|x| Replace any number with an x to represent a placeholder for it: you'll take anything.. |
|^|"compatible with version": allows changes that do not modify the first non-zero version. So ^1.2.3 will allow 1.x.x but ^0.2.3 will only allow 0.2.x  |
|~|"approximately equivalent to version": allows patch level changes if minor provided, allows minor if not |

## :bear: Bear in mind ...

Semver is only a convention that developers should follow, and isn't enforcable. Some delightful soul may just bump the minor version whilst adding breaking changes to a pivotal package used by your app, but package versioning like this works on the assumption that humans can follow a simple set of rules. Do your bit: spread the word about semver to your colleagues so that we're all on the same page! :book:

If you really want to lock down the dependency versions in your package.json, consider looking at `npm shrinkwrap`.

## References

This is only a brief summary - find out much more info at:

* [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
* [docs.npmjs.com/misc/semver](https://docs.npmjs.com/misc/semver)
