import { ArrowRight, Link2 } from 'lucide-react'
import { profile } from '@/content/profile'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from 'react-icons/fa'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
} as const

export function Hero() {
  const emailHref =
    profile.socials.find((social) => social.icon === 'mail')?.url ??
    `mailto:${profile.email}`

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">

          {/* Text content */}
          <div className="max-w-2xl space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground">
                {profile.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {profile.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/1PgS_wjYwlFL2QYBRA-aNliXKcJEzNkiI/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <FaFilePdf size={20} />
                View CV
                <ArrowRight size={20} />
              </a>

              <a
                href={profile.socials.find((social) => social.icon === 'github')?.url ?? '#'}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              {profile.socials.map((social) => {
                const Icon =
                  iconMap[social.icon as keyof typeof iconMap] ?? Link2

                const isExternal = !social.url.startsWith('mailto:')

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center flex-shrink-0 self-start">
            <div
              className="rounded-full p-[3px] shadow-[0_8px_32px_rgba(13,110,253,0.18)]"
              style={{
                background: 'linear-gradient(135deg, #000000 0%, #ffffff 100%)',
                width: '300px',
                height: '300px',
              }}
            >
              <img
                src={profile.image}
                alt="Foto de perfil"
                loading="lazy"
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}