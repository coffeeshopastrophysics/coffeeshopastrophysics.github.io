# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for "Coffee Shop Astrophysics" - a website showcasing talks and posts related to astrophysics. The site uses the custom "csa" theme with Tailwind CSS for styling.

**Current Status**: Live at https://coffeeshopastrophysics.github.io/ (deployed via GitHub Pages)

## Development Commands

- **Start development server**: `make run-local` or `touch postcss.config.js && hugo server -D`
- **Build site**: `hugo` (outputs to `public/` directory)
- **CSS processing**: Uses PostCSS with Tailwind CSS and autoprefixer
- **Deploy**: Automatic deployment via GitHub Actions on push to main branch

## Architecture

### Content Structure
- `/content/`: Site content in Markdown format
- `/data/talks.yaml`: Talk data for the talks listing page
- `/themes/csa/`: Custom Hugo theme containing layouts and assets

### Theme Structure
- `/themes/csa/layouts/`: HTML templates using Hugo templating with Spotlight design system
- `/themes/csa/assets/css/main.css`: Main stylesheet with Tailwind imports, custom animations, and explicit prose link styling
- `/themes/csa/layouts/talks/list.html`: Specialized template for talks listing with timeline layout and "no upcoming talks" message
- `/themes/csa/layouts/_partials/footer.html`: Footer with navigation links and archive link

### Key Features
- **Modern Design**: Inspired by Tailwind UI Spotlight template with dark mode support
- **Talks System**: Dynamic talks listing from YAML data with upcoming/past categorization in timeline format
- **No Upcoming Talks Handling**: Shows friendly message when no upcoming talks are scheduled
- **CSS Pipeline**: Hugo processes CSS through PostCSS with Tailwind CSS v4
- **Menu System**: Configurable navigation with active state indicators and hover effects
- **Responsive Layout**: Mobile-first design with glassmorphism navigation elements
- **Archive Access**: Footer link to old website archive at https://coffeeshopastrophysics.github.io/website-archive/
- **SEO & Social**: Open Graph meta tags, favicons, and proper meta descriptions

### Data Format for Talks
The talks system expects `data/talks.yaml` with entries like:
```yaml
- title: "Talk Title"
  date: 2025-05-02T15:30:00-05:00
  speakers: ["Name (Affiliation)"]
  venue: "Room Location"
  venue_link: "https://google-maps-link"
  slides: "https://link-to-slides.pdf"
  video: "https://youtu.be/video-id"
  abstract: "Talk description"
```

## Configuration

- **Site config**: `hugo.toml` (baseURL: https://coffeeshopastrophysics.github.io/)
- **Tailwind config**: `tailwind.config.js` (scans layouts and content, includes safelist for prose links)
- **PostCSS config**: `postcss.config.js`
- **GitHub Actions**: `.github/workflows/hugo.yaml` (Hugo 0.149.0, Node.js 22.18.0, Go 1.25.0)

## File Organization

- Hugo follows standard directory structure
- Custom theme keeps all template logic in `themes/csa/`
- Static assets processed through Hugo's asset pipeline
- Archive of old website available at separate repository

## Recent Improvements

### CSS & Styling
- Fixed prose link colors not displaying in production by adding explicit CSS rules
- Ensured teal colors (teal-500, teal-300) are always available via CSS custom properties
- Added `!important` declarations to prevent style conflicts

### User Experience  
- Modified talks page to always show "Upcoming Talks" section
- Added friendly message when no upcoming talks are scheduled instead of hiding the section
- Added archive link in footer for access to old website content

### SEO & Meta
- Updated Open Graph meta tags for better social media sharing
- Added proper favicon configuration with multiple formats
- Updated baseURL to reflect final deployment location

## Known Issues & Solutions

- **Prose link colors in production**: Resolved by adding explicit CSS rules with `!important`
- **Empty upcoming talks**: Now shows informative message instead of empty section
