---
layout: post
title: Semver in package.json
date: 2016-03-09 21:56:35
comments: true
published: true
categories:
- javascript
---
You might have noticed some unexpected characters next to the package versions of the `dependencies` or `devDependencies` properties in your `package.json` file:

{% highlight javascript %}
"dependencies": {
  "backbone": "^1.3.1",
  "express": "~4.13.4"
}
{% endhighlight %}

## Semver

First of all, let's understand how packages are versioned and what each of those numbers represent.

Package versioning works on the principle of semantic versioning, or "semver". When you publish a new version of a module or package you should update the version number in line with certain conventions. A version number is made up of three figures representing the current increment:

> MAJOR.MINOR.PATCH

Quoting directly from [semver.org](http://semver.org/), release a:

> * MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Reset the other increments as appropriate: a package on version 1.4.3 releasing a major version would be released as 2.0.0.

## Carets & Tildes & Ranges, Oh my! :cat: :tiger: :bear:

You've installed a dependency to your app using npm, but you're not too precious about the version of the dependency - it's not critical and it'll probably still work if the version is 0.4.1 or 0.4.2. You can specify how flexible you want to be with versions using special symbols in the `package.json` file. but you want to specify what version is used. Here's a quick primer:

| Symbol | Meaning | Example |
|--|--|
| - | The hyphen creates an inclusive set | `1.2.0 - 1.3.3` allows versions 1.2.0, 1.3.3 and everything in between |
|>, <, >=, <=|Use one or combine a two to create an acceptable range| `>=0.4.1 <0.5.0` allows everything from 0.4.1 up to but not including 0.5.0
|x, X, *| Replace any number with one of these characters to match any number in this position | `*` will match any version at all. `1.x` will match any minor version in the 1 range |
|^|"compatible with version": allows changes that do not modify the first non-zero version | `^1.2.3` allows 1.x.x but `^0.2.3` will only allow 0.2.x |
|~|"approximately equivalent to version": allows patch level changes if minor provided, allows minor if not | `~1.2.3` the range >=1.2.3 <1.3.0, while `~1` is equivalent to 1.x.x |

__Allow only patch changes:__ `~1.1.3` which is like >=1.1.3 <1.2.0
__Allow minor changes:__ `^1.1.3` which is like >=1.1.3 <2.0.0

## :bear: Bear in mind ...

Semver is only a convention that developers should follow, and isn't strictly enforcable. While some delightful soul may just bump the minor version whilst adding breaking changes to a pivotal package used by your app, package versioning like this works on the assumption that humans can follow a simple set of rules.

Do your bit: spread the word about semver to your colleagues so that we're all on the same page! :book:

If you really want to lock down the dependency versions in your package.json, consider looking at `npm shrinkwrap`.

### Bumping versions in npm

Is dead easy. Replace `type` with `patch`, `minor` or `major`:

{% highlight bash %}
npm version type -m 'Version %s'
git push && git push --tags
npm publish
{% endhighlight %}

## References

This is only a brief summary - find out much more info at:

* [docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)
* [docs.npmjs.com/misc/semver](https://docs.npmjs.com/misc/semver)
