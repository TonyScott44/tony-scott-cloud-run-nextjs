# Tony Scott Portfolio

This repository contains the source code for Tony Scott's personal portfolio website. The site is built with Next.js and presents professional background, leadership experience, technical skills, selected work, contact details, and resume links in a responsive web experience.

## Purpose

The portfolio is intended to serve as a central online presence for:

- Highlighting software engineering and engineering leadership experience.
- Presenting current focus areas such as cloud-scale distributed systems, AI-powered platforms, Azure, full-stack engineering, and developer productivity.
- Sharing career history across Microsoft, Spotify, Twitter, Delta Air Lines, and Travelport.
- Providing a downloadable CV/resume link.
- Showcasing portfolio projects and professional contact information.

## Tech Stack

- **Framework:** Next.js 14
- **UI:** React 18, Bootstrap, Sass
- **Styling:** SCSS modules and custom theme assets under `public/assets/scss`
- **Animations and UI libraries:** AOS, React Slick, React Tabs, React Modal, React Toastify
- **Deployment-ready container:** Dockerfile for production builds, suitable for Cloud Run or other container platforms

## Project Structure

```text
src/
  components/
    about/        Resume, skills, education, achievements, and personal info sections
    blog/         Blog section components
    hero/         Homepage hero content
    portfolio/    Portfolio items and modal details
    switch/       Theme switch components
  Context/        React context provider
  Hooks/          Shared content/data hooks
  layout/         Shared page wrapper
  pages/          Next.js page routes
  styles/         Global SCSS entry point
public/
  assets/         Images, fonts, and SCSS theme files
utils/            Theme utilities
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Build the production application
npm run start    # Start the production server
npm run lint     # Run Next.js linting
```

## Content Updates

Most site content is maintained directly in React component data structures:

- Hero introduction: `src/components/hero/Hero.jsx`
- Experience timeline: `src/components/about/Experience.jsx`
- Skills list: `src/components/about/Skills.jsx`
- Education: `src/components/about/Education.jsx`
- Personal information: `src/components/about/PersonalInfo.jsx`
- Portfolio entries: `src/components/portfolio/portfolioData.js`

Static images and theme assets are stored in `public/assets`.

## Docker

Build the production container:

```bash
docker build -t tony-scott-portfolio .
```

Run it locally:

```bash
docker run -p 3000:3000 tony-scott-portfolio
```

The container exposes port `3000` and runs `npm start` against the optimized Next.js build.

## Deployment

The included Dockerfile makes the app suitable for container-based hosting such as Google Cloud Run. A typical deployment flow is:

1. Build the Next.js production app.
2. Package it into the Docker image.
3. Push the image to a container registry.
4. Deploy the image to Cloud Run or another container platform.

## License

This is a personal portfolio project. All resume content, images, and branding should be treated as personal/proprietary unless otherwise stated.
