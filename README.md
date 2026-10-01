# Mark McLellan — Personal Website

My personal portfolio site, built with plain HTML, CSS, and JavaScript (no frameworks or build step).

**Live site:** https://markmmclellan.github.io/Personal-Website/

## Pages

- `index.html` — Home / bio, with an animated typewriter intro, glass-style skill pills, and an interactive particle background
- `project.html` — Projects I've worked on
- `resume.html` — Downloadable English and Japanese resumes
- `contact.html` — Contact info and a message form

## Features

- Frosted-glass ("glassmorphism") UI elements with 3D cursor-tilt hover effects
- Canvas-based particle background that reacts to mouse movement
- Fully responsive layout
- Color scheme inspired by the Japanese "Running Man" emergency exit sign

## Tech

- HTML5 / CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (no dependencies)

## Running locally

No build step required — just open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Structure

```
index.html
project.html
resume.html
contact.html
styles.css
typewriter.js
tilt.js
particles.js
resume.pdf
rirekisho.pdf
```
