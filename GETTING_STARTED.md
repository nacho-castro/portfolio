# Getting Started with Your Next.js Portfolio

Welcome to your new Next.js portfolio! This guide will help you get up and running in minutes.

## 🚀 Quick Start (5 minutes)

### 1. Prerequisites
Ensure you have:
- **Node.js 18+** (or 20+ recommended)
- **pnpm** (or npm/yarn)

Check your versions:
```bash
node --version  # v18+
pnpm --version  # 8+
```

### 2. Install & Run Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Your portfolio is live!

### 3. Edit Your Information

Open `content/profile.ts` and update:
```typescript
export const profile: ProfileData = {
  name: 'Ignacio Castro',  // ← Change to your name
  title: 'Full Stack Developer',  // ← Your title
  email: 'ignaciocastroplanas@gmail.com',  // ← Your email
  location: 'Spain',  // ← Your location
  // ... update skills, projects, education, socials
}
```

Save the file. The browser automatically reloads with your changes!

## 📝 Customization

### Update Colors

Colors live in `app/globals.css`. Find the `:root` section and change these:

```css
:root {
  --primary: oklch(0.205 0 0);        /* Main brand color */
  --background: oklch(1 0 0);         /* Page background */
  --foreground: oklch(0.145 0 0);     /* Text color */
  --muted: oklch(0.97 0 0);           /* Secondary backgrounds */
  /* ... more colors ... */
}
```

**Easy color values:**
- `oklch(0.205 0 0)` = Dark (good for primary)
- `oklch(0.97 0 0)` = Light gray
- `oklch(1 0 0)` = White
- `oklch(0.145 0 0)` = Black

Or use an [OKLch color picker](https://oklch.com/).

### Add Your Projects

In `content/profile.ts`, add to the `projects` array:

```typescript
projects: [
  // ... existing projects
  {
    id: 'my-new-project',
    title: 'Project Name',
    description: 'What it does and why it matters',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project',
    live: 'https://projecturl.com', // optional
  },
]
```

### Add Skills

In `content/profile.ts`, expand the `skills` array:

```typescript
skills: [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Firebase'],
  },
  // Add more categories as needed
]
```

### Update Education

Add your education in `content/profile.ts`:

```typescript
education: [
  {
    institution: 'Your University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    year: '2020 - 2024',
  },
]
```

### Change Social Links

Update the `socials` array in `profile.ts`:

```typescript
socials: [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github', // 'github', 'linkedin', or 'mail'
  },
  // ... more links
]
```

## 🎨 Styling Components

Components use Tailwind CSS. Modify `components/header.tsx` or any component:

```tsx
// Add your custom styling
<div className="p-4 bg-primary text-primary-foreground rounded-lg">
  // Uses design tokens from globals.css
</div>
```

Common Tailwind classes:
```
Spacing:   p-4 (padding), m-4 (margin), gap-4 (gap)
Colors:    bg-primary, text-foreground, border-border
Sizing:    w-full, h-screen, max-w-lg
Display:   flex, grid, hidden, block
Responsive: md:text-lg, lg:grid-cols-3
```

[Full Tailwind documentation](https://tailwindcss.com/docs)

## 🌐 Deployment

### Option 1: Vercel (Recommended)

**Easiest! Just 3 clicks:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" → select your repo → Deploy

That's it! Vercel automatically:
- Deploys your site
- Gives you a live URL
- Deploys on every GitHub push
- Provides free SSL certificate

### Option 2: CLI Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Build Locally

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

Then deploy the `.next` folder to your hosting.

## 🔍 Check Your Work

### Locally
- Visit [http://localhost:3000](http://localhost:3000)
- Test on mobile: DevTools → Toggle device toolbar
- Check all sections: Home, Skills, Projects, Education

### Production
- Open your deployed URL
- Run [Google PageSpeed Insights](https://pagespeed.web.dev)
- Check for 90+ scores

## 🚨 Common Issues

### Port 3000 already in use
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -p 3001
```

### Changes not showing
```bash
# Clear cache and rebuild
rm -rf .next
pnpm dev
```

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

## 📚 Learn More

- **Next.js**: [nextjs.org/learn](https://nextjs.org/learn)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

## 🎯 Next Steps

1. ✅ Customize your profile data
2. ✅ Update colors and styling
3. ✅ Add your projects
4. ✅ Deploy to Vercel
5. ✅ Share your portfolio!

## 💡 Pro Tips

- Use [Vercel Analytics](https://vercel.com/analytics) to track visitors
- Add a contact form: See `OPTIMIZATION.md`
- Start a blog: Guides in `README.md`
- Monitor performance: Use Lighthouse

## 🎓 Learn by Doing

Edit files and see changes instantly:
- **components/hero.tsx**: Change hero text
- **content/profile.ts**: Update your bio
- **app/globals.css**: Change colors
- **next.config.mjs**: Add security headers

## Questions?

Check these resources:
- 📖 [README.md](./README.md) - Full documentation
- ⚡ [OPTIMIZATION.md](./OPTIMIZATION.md) - Performance guide
- 📋 [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - What changed

---

Happy building! 🚀

**Pro tip**: Commit your changes to GitHub frequently. Vercel will auto-deploy!

```bash
git add .
git commit -m "Update portfolio with my info"
git push
```

Your site is now live! 🎉
