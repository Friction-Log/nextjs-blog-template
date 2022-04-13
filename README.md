# NextJS Blog Template

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFriction-Log%2Fnextjs-blog-template)

A template that powers [FrictionLog.com](https://frictionlog.com)

## Stack

- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Features

- Blog
- RSS Feed
- Podcast RSS Feed (can be used with both Spotify and Apple)

## Installation

```
npm install
```

## Development

```
npm run dev
```

Open http://localhost:3000/

## Customization

There are a few places that you would want to update before deploying this to your audience:

- Update the `src/data/constants.ts` file with your information.
- Update the `public/site.webmanifest` file.
- Update the `src/pages/_document.tsx` file with your domain. We use [Plausible](https://plausible.io/docs/plausible-script) analytics.
- Update the Sign Up form for email subscription at `src/components.layout.tsx`.
- Update images in the `public` folder.
- We use links directly from [Unsplash](https://unsplash.com/) but you might do something different.

## Content

All the content is available in `content/posts`. There is where you will add your `mdx` files.

## Support

If you are using this template, support us by giving a star on GitHub. You can also become a project sponsor if you are feeling extra tipsy. 

## Attribution

Sample MP3 downloaded from: [Bensound.com](https://www.bensound.com)