# TViewer – Transcript Viewer

Render raw HTML passed via the `html` query parameter. No storage, no caching, no sanitization.

## Usage

- Encode your HTML with `encodeURIComponent` and link to `/view?html=<encoded>`.

```
const html = "<h1>Hello</h1>";
const encoded = encodeURIComponent(html);
const link = `https://tviewer.vercel.app/view?html=${encoded}`;
```

- Example: `https://tviewer.vercel.app/view?html=%3Ch1%3ETest%3C%2Fh1%3E`

## Bot-side helpers

- `utils/html.js` exports `encodeHTMLForURL` and `decodeHTMLFromURL`.

## Deploy

- `npm install`
- `vercel --prod`

## Notes

- `/view` renders inside an iframe with `sandbox="allow-scripts allow-same-origin"`.
- Caching is disabled via headers in `vercel.json`.