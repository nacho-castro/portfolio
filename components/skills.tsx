import { profile } from '@/content/profile'
import { Bot } from "lucide-react"
import { FaJava } from "react-icons/fa6"
import { FaAws } from "react-icons/fa";
import { Workflow } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiCloudflare,
  SiVercel,
  SiRender,
} from 'react-icons/si'
import { TbBrandGolang } from 'react-icons/tb'

const icons: Record<string, React.ElementType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  Tailwind: SiTailwindcss,

  Java: FaJava,
  Spring: SiSpring,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Golang: TbBrandGolang,

  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Supabase: SiSupabase,

  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  AWS: FaAws,
  "n8n": Workflow,

  OpenAI: Bot,
  AI: Bot,

  Vercel: SiVercel,
  Render: SiRender,
  Cloudflare: SiCloudflare,
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase">
            Tech Stack
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I Build With
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I enjoy building scalable web applications, APIs and AI-powered
            automations using modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {profile.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = icons[skill]

                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-2xl font-semibold mb-3">
          💡  Currently Exploring
          </h3>

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              'AI Agents',
              'LLM API Integration',
              'System Design',
              'Microservices',
              'Cloud Architecture',
              'SaaS',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}