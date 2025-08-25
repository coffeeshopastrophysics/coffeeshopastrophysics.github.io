# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for "Coffee Shop Astrophysics" - a website showcasing talks and posts related to astrophysics. The site uses the custom "csa" theme with Tailwind CSS for styling.

## Development Commands

- **Start development server**: `make run-local` or `touch postcss.config.js && hugo server -D`
- **Build site**: `hugo` (outputs to `docs/` directory)
- **CSS processing**: Uses PostCSS with Tailwind CSS and autoprefixer

## Architecture

### Content Structure
- `/content/`: Site content in Markdown format
- `/data/talks.yaml`: Talk data for the talks listing page
- `/themes/csa/`: Custom Hugo theme containing layouts and assets

### Theme Structure
- `/themes/csa/layouts/`: HTML templates using Hugo templating with Spotlight design system
- `/themes/csa/assets/css/main.css`: Main stylesheet with Tailwind imports and custom animations
- `/themes/csa/layouts/talks/list.html`: Specialized template for talks listing with timeline layout

### Key Features
- **Modern Design**: Inspired by Tailwind UI Spotlight template with dark/light mode support
- **Talks System**: Dynamic talks listing from YAML data with upcoming/past categorization in timeline format
- **CSS Pipeline**: Hugo processes CSS through PostCSS with Tailwind CSS v4
- **Menu System**: Configurable navigation with active state indicators and hover effects
- **Responsive Layout**: Mobile-first design with glassmorphism navigation elements

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

- Site config in `hugo.toml`
- Tailwind config in `tailwind.config.js` (scans layouts and content)
- PostCSS config in `postcss.config.js`

## File Organization

- Hugo follows standard directory structure
- Custom theme keeps all template logic in `themes/csa/`
- Static assets processed through Hugo's asset pipeline
