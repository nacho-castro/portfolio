import { profile } from '@/content/profile'
import { Code, Link2, Mail } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedin size={20} />,
  mail: <FaEnvelope size={20} />,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Ignacio Castro</h3>
              <p className="text-muted-foreground">
                Full Stack Developer & Web Engineer
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#home" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-primary transition-colors">
                    Education
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    {iconMap[social.icon] || <Mail size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
              <p>
                © {currentYear} Ignacio Castro. All rights reserved.
              </p>
              <p>
                Built with{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Next.js
                </a>
                {' '}and{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Tailwind CSS
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
