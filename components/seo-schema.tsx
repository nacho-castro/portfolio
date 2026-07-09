export function SEOSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ignacio Castro',
    url: 'https://ignacio-castro.dev',
    email: 'ignaciocastroplanas@gmail.com',
    jobTitle: 'Full Stack Developer',
    image: 'https://ignacio-castro.dev/profile.jpg',
    sameAs: [
      'https://github.com/nacho-castro',
      'https://www.linkedin.com/in/ignacio-castro-p/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'JavaScript',
      'Full Stack Development',
      'Web Development',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
