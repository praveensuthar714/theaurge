# Google Drive Portfolio Setup

## Overview
This repository now uses a static `public/portfolio.json` file generated from a Google Drive portfolio folder. The frontend consumes only `portfolio.json`, while the backend generator syncs Drive metadata and preserves folder hierarchy.

## Recommended Google Drive Structure

- `Portfolio` (root)
  - `Production`
    - `Film`
    - `TVC`
    - `Documentaries`
    - `Brand Films`
    - `Political`
  - `Design`
    - `Branding`
    - `Flyers`
    - `Brochures`
  - `Marketing`
    - `Social Media`
    - `Performance`
    - `SEO`
    - `Offline`
  - `Campaigns`
    - `Holiday Launch`
    - `Product Launch`
    - `Awareness`
  - `Industries`
    - `Real Estate`
    - `Healthcare`
    - `Finance`
    - `E-commerce`

## Naming Conventions

- Use descriptive folder names and keep them short.
- Use spaces between words, not special characters.
- Use `Video Title - Client Name` for file names.
- Avoid generic export names like `IMG_1234.mp4` or `VID_5678.mov`.
- Keep folder names consistent across the portfolio hierarchy.

## Environment Setup

Create a `.env.local` file in the project root with:

```env
GOOGLE_DRIVE_API_KEY=AIzaSyA4Qe-us7G1ecY81G8t3_wxNkxBiROoArY
GOOGLE_DRIVE_ROOT_FOLDER_ID=YOUR_MAIN_PORTFOLIO_FOLDER_ID
PORTFOLIO_OUTPUT_PATH=./public/portfolio.json
```

## Generation Command

Run the Drive portfolio generator:

```bash
npm run generate:drive-portfolio
```

This will recursively scan the folder structure, extract video files, and write a static JSON file to `public/portfolio.json`.

## Build / Run Commands

- `npm run dev` — start the Next.js dev server
- `npm run build` — build the site
- `npm run start` — run the production server
- `npm run generate:drive-portfolio` — regenerate `public/portfolio.json`

## Notes

- The frontend never calls Google Drive directly.
- Videos are represented by thumbnails in the card layout.
- Full video preview loads only when the user opens the lightbox.
- The JSON supports future pagination, filtering, AI search, and migration.
