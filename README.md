# My Profile - Next.js Portfolio

A modern portfolio website for a React Native mobile developer, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 16 and React 19
- 🎭 Smooth animations with Framer Motion
- 🎨 Beautiful UI with Tailwind CSS and custom theme
- 📱 Fully responsive layout
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Add the developer illustration image:
   - Place your developer illustration image at `public/developer-illustration.png`
   - The recommended size is 600x600 pixels or larger

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-profile/
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   │   └── button.tsx # Button component
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Experience.tsx # Experience section
│   ├── Projects.tsx   # Projects section
│   ├── Contact.tsx    # Contact section
│   └── Footer.tsx     # Footer
├── lib/               # Utility functions
│   └── utils.ts       # Utility functions (cn helper)
├── public/            # Static assets
│   └── developer-illustration.png  # Hero image (add your own)
└── tailwind.config.ts # Tailwind CSS configuration
```

## Customization

### Update Personal Information

Edit the following components to update your information:

- `components/Hero.tsx` - Update hero text, stats, and call-to-action
- `components/About.tsx` - Update about section content
- `components/Skills.tsx` - Update skills and expertise
- `components/Experience.tsx` - Update work experience and education
- `components/Projects.tsx` - Update featured projects
- `components/Contact.tsx` - Update contact information and social links
- `components/Footer.tsx` - Update footer content

### Theme Customization

The color scheme and theme variables are defined in `app/globals.css`. You can customize:

- Primary colors (Teal)
- Accent colors (Coral)
- Background colors
- Shadows and gradients

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - UI primitives

## License

This project is private and proprietary.
