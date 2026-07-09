# Ignacio Castro - Portfolio Website

A modern, high-performance portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Server-First Architecture**: Optimized with React Server Components for better performance and security
- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: JSON-LD structured data, sitemap, robots.txt, and comprehensive meta tags
- **Security Headers**: CSP, X-Frame-Options, X-Content-Type-Options, and more
- **TypeScript**: Full type safety throughout the application
- **Dark Mode Ready**: Tailwind CSS with built-in dark mode support
- **Performance**: Optimized images, lazy loading, and efficient bundle size

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (Google Fonts)
- **Icons**: lucide-react
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # XML sitemap for SEO
│   └── blog/               # Blog section (ready for content)
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero/intro section
│   ├── skills.tsx          # Skills section
│   ├── projects.tsx        # Projects showcase
│   ├── education.tsx       # Education timeline
│   ├── footer.tsx          # Footer with social links
│   └── seo-schema.tsx      # JSON-LD schema
├── content/
│   └── profile.ts          # Portfolio data (TypeScript module)
├── lib/
│   └── types.ts            # TypeScript type definitions
├── public/
│   └── robots.txt          # Robots.txt for SEO
└── next.config.mjs         # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Update Your Profile Data

Edit `/content/profile.ts` to customize:
- Personal information (name, title, location)
- Skills and expertise
- Projects and work samples
- Education and experience
- Social media links

Example:
```typescript
export const profile: ProfileData = {
  name: 'Your Name',
  title: 'Your Title',
  // ... more fields
}
```

### Styling

The site uses Tailwind CSS v4 with design tokens defined in `app/globals.css`. To customize colors and spacing:

1. Edit the CSS variables in `globals.css`
2. Tailwind automatically applies the changes

### Adding Blog Content

1. Create `.mdx` files in `app/blog/posts/`
2. Set up dynamic routes in `app/blog/[slug]/page.tsx`
3. Use `generateStaticParams()` for static generation

## Building for Production

```bash
pnpm build
pnpm start
```

Or deploy directly to Vercel:
```bash
pnpm vercel
```

## SEO

The site includes:
- ✅ Dynamic meta tags with Open Graph support
- ✅ JSON-LD structured data (Person schema)
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ Mobile-friendly design
- ✅ Fast Core Web Vitals

## Performance

The portfolio is optimized for:
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Vercel automatically deploys on every push

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- GitHub Pages
- Docker
- Any Node.js hosting

## License

MIT - Feel free to use this template for your own portfolio!

## Contributing

Improvements and suggestions are welcome! Feel free to open issues or submit pull requests.

## Support

For questions or issues, please check the [Next.js documentation](https://nextjs.org/docs) or open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
