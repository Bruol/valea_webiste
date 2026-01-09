# On The Moon - Theater Production Website

A beautiful, modern website for the "On The Moon" theater production, built with Next.js, React, Tailwind CSS, and Bun.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Language**: TypeScript

## Features

- 🎭 Stunning hero section with parallax effect
- 🖼️ Interactive photo gallery with lightbox
- 📱 Fully responsive design
- 🎨 Modern, theater-themed dark aesthetic
- ✨ Smooth animations and hover effects
- 📧 Contact form section

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your system.

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
# Create production build
bun run build

# Start production server
bun run start
```

## Project Structure

```
├── public/              # Static assets (photos)
├── src/
│   └── app/
│       ├── globals.css  # Global styles and Tailwind config
│       ├── layout.tsx   # Root layout component
│       └── page.tsx     # Home page component
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Customization

### Colors

The color scheme can be customized in `src/app/globals.css`:

```css
@theme {
  --color-primary: #1a1a2e;
  --color-secondary: #16213e;
  --color-accent: #e94560;
  --color-accent-light: #ff6b6b;
  --color-gold: #ffd700;
  --color-cream: #faf3e0;
}
```

### Photos

Replace the images in the `public/` directory with your own production photos. Update the `photos` array in `src/app/page.tsx` accordingly.

## License

All rights reserved.
