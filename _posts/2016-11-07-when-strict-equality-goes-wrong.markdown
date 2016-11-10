---
layout: post
title: When strict equality goes wrong
summary: With great power comes great responsibilty, and null !== false.
date: 2016-11-07 21:24:01
comments: true
published: true
categories:
- javascript
- testing
---

I recently saw this code in the wild. _Names have been changed to protect those involved._

```javascript
function makeFizzbobs (widget) {
    if (widget === null) {
        return {};
    } else {
        // Does something interesting with widget
        return 42;
    }
}
```

I could imagine what the author of the code thought they were doing: they were guarding against an empty function parameter right? And they were getting extra brownie points by using the triple equals strict equality, because that's what all that linting software tells you to use. So yeah. Works as expected.

🚨 No.

What happens when you call this function with an empty parameter then?

```javascript
makeFizzbobs(); // 42
```

Oh. So an empty argument isn't the same thing as `null`? 🤔 No. No it's not. Let's try some other parameters.

```javascript
makeFizzbobs(''); // 42
makeFizzbobs(undefined); // 42
makeFizzbobs(false); // 42
makeFizzbobs(null); // {}
```

Hmm ... only null strictly equals null then, or `null === null`. So how can we fix this function to guard against an empty argument? We can check for a falsey.

_You can play along at home by whipping up some quick unit tests like I outlined [in my other blog post](/blog/super-quick-regex-tdd-setup). Define a quick function in the test file to write some test cases._

Personally, I would short-circuit the function execution by checking for a falsey. If we expect an argument to the function and none is passed in, this will evaluate to a falsey:

```javascript
function makeFizzbobs (widget) {
    if (widget) {
        // Do something exciting
        return 42;
    } else {
        return {};
    }
}
```

I've swapped the "order" round, I'm checking for `widget` rather than `!widget`, which I think is a little clearer to understand rather than having to reverse the logic in your head with the presence of a `!` (I'm lazy, so what 😴).

What this means is that anything that isn't a truthy values that's passed in as `widget` will result in an empty object `{}` being returned. And what are the falsey values?


- false
- NaN
- 0
- undefined
- null
- ''

So now the function works as expected:

```javascript
makeFizzbobs(); // {}
makeFizzbobs(null); // {}
makeFizzbobs(''); // {}
makeFizzbobs(123); // 42
makeFizzbobs('abc'); // 42
```

This doesn't cover every situation - perhaps you really don't want an empty array passed in, or `Infinity`, or the string `"flibbertigibbet"`, in which case you'll need an extra clause in your if-statement, but it's a good place to start in JavaScript's loosely-typed Wild West.