# Performance Optimization Guide

This guide documents performance considerations and optimization opportunities for the portfolio.

## Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FCP (First Contentful Paint)**: < 1.8s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **INP (Interaction to Next Paint)**: < 200ms

## Current Optimizations

✅ **Image Optimization**
- Using next/image component (configured for unoptimized in dev, but ready for production)
- SVG icons via lucide-react (lightweight, no external assets)

✅ **Code Splitting**
- Each section as separate Server Component
- Client components only where necessary (Header with menu toggle)
- Automatic code splitting by Next.js

✅ **Caching Strategy**
- Static generation for home page
- Design tokens in CSS (no JS runtime overhead)

✅ **Bundle Size**
- No unnecessary dependencies
- Tree-shakeable imports from lucide-react
- Minimal CSS with Tailwind v4

## Performance Metrics Checklist

- [ ] Run `pnpm build` and check bundle size: `du -sh .next`
- [ ] Use Chrome DevTools to check:
  - Network tab: Total payload < 100KB (gzipped)
  - Performance tab: LCP < 2.5s, CLS < 0.1
  - Coverage tab: Unused CSS/JS
- [ ] Test with Lighthouse:
  - Desktop: aim for 90+ score
  - Mobile: aim for 85+ score

## Recommended Improvements

### 1. Image Optimization (When Adding Images)
```typescript
// Example: Optimize hero background
import Image from 'next/image'

<Image
  src="/hero-bg.webp"
  alt="Portfolio hero"
  fill
  priority  // Use for LCP images
  sizes="(max-width: 768px) 100vw, 100vw"
  className="object-cover"
/>
```

### 2. Font Loading Optimization
Currently using Inter from next/font/google (optimal).
Already configured with subset: ['latin']

### 3. Add Web Vitals Monitoring
```typescript
// In app/layout.tsx
import { useReportWebVitals } from 'next/web-vitals'

export function useReportWebVitals(metrics) {
  // Send to analytics
  console.log(metrics)
}
```

### 4. CSS-in-JS Prevention
✅ Already using static Tailwind CSS (not CSS-in-JS)
- No styled-components or emotion
- No runtime CSS generation

### 5. Prefetch Optimization
```typescript
// In components that link to other pages
<Link href="/blog" prefetch={false}>
  // Prevent prefetching if not needed
</Link>
```

## Production Build Checklist

- [ ] Run `pnpm build` locally
- [ ] Check build output size
- [ ] Test with `pnpm start`
- [ ] Verify all routes work
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Run Lighthouse CI
- [ ] Check security headers with curl

```bash
# Check security headers
curl -I https://ignacio-castro.dev

# Check response time
curl -w "Total time: %{time_total}s\n" -o /dev/null https://ignacio-castro.dev
```

## Monitoring Tools

Recommended services for production monitoring:

1. **Vercel Analytics** (built-in)
   - Real User Monitoring (RUM)
   - Web Vitals tracking
   - Automatic deployment tracking

2. **Google PageSpeed Insights**
   - Regular audits (monthly)
   - Field data from real users

3. **Sentry** (optional)
   - Error tracking
   - Performance monitoring

## Database & API Optimization (For Future Enhancements)

If adding comments, contact forms, or blog posts with database:

- Use Vercel KV for caching
- Implement ISR (Incremental Static Regeneration)
- Use API route caching headers
- Consider edge caching with Vercel Edge Network

## Example: Adding a Contact Form with Optimization

```typescript
// app/api/contact/route.ts
import { Ratelimit } from '@upstash/ratelimit'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
})

export async function POST(request: Request) {
  const identifier = request.headers.get('x-forwarded-for') || 'unknown'
  const { success } = await ratelimit.limit(identifier)
  
  if (!success) return new Response('Rate limited', { status: 429 })
  
  // Process form...
}
```

## Lighthouse Audit Command

```bash
# Using Lighthouse CLI
npm install -g @lhci/cli@latest

# Run audit
lhci autorun

# Or online at PageSpeed Insights
# https://pagespeed.web.dev/?url=https://ignacio-castro.dev
```

## Next Steps

1. Deploy to Vercel and monitor analytics
2. Run monthly Lighthouse audits
3. Monitor Core Web Vitals with Vercel Analytics
4. Add real-time error tracking with Sentry (optional)
5. Implement contact form with rate limiting (optional)

---

For more information, see:
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web Vitals](https://web.dev/vitals/)
- [Core Web Vitals Guide](https://web.dev/core-web-vitals/)
