import { profile } from '@/content/profile'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg">
              Formal education and certifications
            </p>
          </div>

          <div className="space-y-6">
            {profile.education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0 last:border-l-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2.5 rounded-full bg-primary border-4 border-background" />

                <div className="bg-background rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {edu.field}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.year}
                      </p>
                    </div>
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
