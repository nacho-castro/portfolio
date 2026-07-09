import { profile } from '@/content/profile'
import { Code, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              Featured work and selected projects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">
            {profile.projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-muted/50 transition-all hover:border-primary/50"
              >
                {project.image && (
                  <div className="relative aspect-[16/9] w-full bg-black/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex h-full flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mb-4 flex-grow text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 border-t border-border pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <Code size={18} />
                        Code
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}