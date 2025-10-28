# Ashley Creative Agency - Next.js Conversion

This is a Next.js conversion of the Ashley Creative Agency HTML template. The original static HTML website has been converted to a modern React/Next.js application with TypeScript support.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **GSAP** for animations and interactions
- **Swiper.js** for sliders and carousels
- **Framer Motion** for additional animations
- **Responsive Design** with mobile-first approach

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── portfolio/        # Portfolio pages
│   ├── services/         # Services pages
│   └── contact/          # Contact page
├── components/            # React components
│   ├── Layout.tsx        # Main layout wrapper
│   ├── Banner.tsx        # Hero banner section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services section
│   ├── Team.tsx          # Team section
│   ├── Reviews.tsx       # Customer reviews
│   ├── Partners.tsx      # Partners carousel
│   ├── Blog.tsx          # Blog section
│   ├── Footer.tsx        # Footer component
│   ├── Navigation.tsx    # Navigation menu
│   ├── Cursor.tsx        # Custom cursor
│   ├── Preloader.tsx     # Loading animation
│   ├── ProgressBar.tsx   # Scroll progress
│   ├── Frame.tsx         # Page frame
│   └── Scripts.tsx       # External scripts loader
└── hooks/                # Custom React hooks
    └── useGSAP.ts        # GSAP animations hook
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features Converted

### 1. **Homepage Sections**
- Hero banner with animated text and CTA buttons
- About section with team information
- Services grid with hover effects
- Team member showcase
- Customer reviews slider
- Partners carousel
- Blog posts preview
- Footer with contact information

### 2. **Navigation**
- Responsive mobile menu
- Smooth page transitions
- Active page highlighting
- Dropdown submenus

### 3. **Animations**
- GSAP-powered scroll animations
- Custom cursor interactions
- Preloader animation
- Scroll progress indicator
- Image hover effects
- Text reveal animations

### 4. **Interactive Elements**
- Swiper.js sliders for reviews and partners
- Fancybox integration for image galleries
- Smooth scrolling navigation
- Form handling for contact page

## Pages

- **Home** (`/`) - Main landing page
- **Portfolio** (`/portfolio`) - Project showcase
- **Services** (`/services`) - Service offerings
- **Contact** (`/contact`) - Contact form and information

## Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components or create new ones

### Modifying Styles
- Global styles: `src/app/globals.css`
- Component-specific styles: Use Tailwind classes or create CSS modules
- Original CSS files are preserved in `public/css/`

### Adding Animations
- Use the `useGSAP` hook for GSAP animations
- Add animation classes to elements
- Configure ScrollTrigger for scroll-based animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Next.js Image component for optimized images
- Lazy loading for components
- Code splitting with dynamic imports
- Optimized bundle size

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Heroku**

## Original Template Credits

- **Template:** Ashley Creative Agency
- **Developer:** Nazar Miller (millerDigitalDesign)
- **Portfolio:** [ThemeForest](https://themeforest.net/user/millerdigitaldesign/portfolio)

## License

This conversion maintains the original template's licensing terms. Please refer to the original template's license for usage rights.