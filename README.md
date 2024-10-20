# Blake Zajac

Personal website built with Next.js and Sanity CMS. Designed and developed by Blake Zajac.

Sanity CMS probably won't be done for a while, or never, who knows.

## Requirements

- Node.js v18.17.0 or later
- Webpack CLI

### Installation

```
npm install
```

### Running the website

```
npm run dev
```

### Compiling assets

```
npx webpack --watch
```

### Accessing the backend

```
/studio
```

### More general @todos

- Move components folder into src. Probs use Gulp instead of webpack for compiling assets
- Block and layout specific styles to be added in their respective component folder, and not in the sass boilerplate. The same goes for js
- Migrate email delivery to React Email, set up key templates for marketing
- Add an email capture block
- Reminder to self that the @ syntax is available for importing. Review ya code.
- Move Sanity schemas into their respective blocks as a type.ts
- SVG Sprites https://svgsprit.es/
- Update <Image /> width and height on background and article cards
- Update next image to fill
- Update article cards to look like background cards, can probs just use background cards instead of article cards and add a grid modifier to the background card collection

### Inspiration

- https://blog.olivierlarose.com/demos/zoom-parallax for the post hero component.
- https://blog.olivierlarose.com/demos/3d-perspective-text to replace the footer cta.
- https://blog.olivierlarose.com/demos/mouse-image-gallery for the photography.
- https://blog.olivierlarose.com/demos/project-gallery-mouse-hover for the reading list.
- https://blog.olivierlarose.com/demos/navigation-menu for the offcanvas.
- https://blog.olivierlarose.com/demos/curved-menu offcanvas alternative.
- https://blog.olivierlarose.com/demos/smooth-parallax-scroll single project component.
- https://blog.olivierlarose.com/demos/3d-glass-effect contact or 404 page.
