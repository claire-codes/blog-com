# [www.claireparker.co.uk](http://www.claireparker.co.uk)

If you haven't got anything constructive to say about my blog, then go look in the mirror. Your hair looks _awful_ today.

## Development

### Run locally

`jekyll serve` - builds and runs locally at `http://127.0.0.1:4000/`

### Write a new blog post

`rake new_post[my-new-post]` or `rake new_post['my new post']`

Or just copy the format of one already in the `_posts` folder, filling in the yaml as necessary 🤷‍♀️

### Gulp tasks

`gulp css` - builds and minifies the CSS, with a bit of uncss-ing included. Bit broken at the moment as you have to do this manually instead of it hooking into jekyll's recompilation stuff.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.