import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Ignacio Castro',
  description: 'Articles about web development, JavaScript, React, and more.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
