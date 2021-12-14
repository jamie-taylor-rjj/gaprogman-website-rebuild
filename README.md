# GaProgMan

This repo contains a very bare bones Tailwind CSS based Hugo website.

## Building Locally

- `hugo server --disableFastRender`

## Getting Started

This bare bones website has nothing in the way of a theme, and has some test text in the header.html file - it should read:

> Welcome to GaProgMan!

when running the repo.

## Resources

The following resources were used in setting this site up:

- [How to add TailwindCSS to your Hugo site](https://dev.to/divrhino/how-to-add-tailwindcss-to-your-hugo-site-5290)
- [Install Tailwind on Hugo [2021]](https://praveenjuge.com/blog/install-tailwind-on-hugo/)

### stdin not found error

Tailwind seems to have an issue with Hugo in the current setup, such that when running `hugo serve` (or similar), a command line error is thrown by node/npm:

``` shell
Error: Error building site: POSTCSS: failed to transform "css/styles.css" (text/css): Error: 
ENOENT: no such file or directory, stat 'c:/Source/gaprogman/stdin'
    at Object.statSync (node:fs:1536:3)
    at trackModified (C:\Source\gaprogman\node_modules\tailwindcss\lib\lib\setupContextUtils.js:447:39)
    at Object.getContext (C:\Source\gaprogman\node_modules\tailwindcss\lib\lib\setupContextUtils.js:788:5)
    at C:\Source\gaprogman\node_modules\tailwindcss\lib\lib\setupTrackingContext.js:141:53   
    at C:\Source\gaprogman\node_modules\tailwindcss\lib\processTailwindFeatures.js:37:11     
    at plugins (C:\Source\gaprogman\node_modules\tailwindcss\lib\index.js:22:68)
    at LazyResult.runOnRoot (C:\Source\gaprogman\node_modules\postcss\lib\lazy-result.js:339:16)
    at LazyResult.runAsync (C:\Source\gaprogman\node_modules\postcss\lib\lazy-result.js:393:26)
    at async Promise.all (index 0) {
  errno: -4058,
  syscall: 'stat',
  code: 'ENOENT',
  path: 'c:/Source/gaprogman/stdin'
}
```

The (TEMPORARY) fix for this was to create a file called `stdin` in the root of the repo (in the above example, this is `c:\Source\gaprogman`).
