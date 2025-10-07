import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Code, ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Prescribe.ME - Voice Prescription using NLU',
      description:
        "Convert doctors’ voice inputs into structured PDF prescriptions using NLU with high slot/intent accuracy.",
      technologies: ['Python', 'Django', 'SQL', 'TensorFlow', 'NLP'],
      demo: 'https://youtu.be/sDKmNwaeFWo?si=RiuCrMzZ2l8hiCh5',
    },
  ]

  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.05 }} className="p-4 rounded-lg bg-secondary/20 border border-secondary/30">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{p.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.technologies.map((t, ti) => (
                <span key={ti} className="px-2 py-1 bg-secondary text-foreground text-xs rounded-full border border-border">{t}</span>
              ))}
            </div>
            {(p.demo || p.github) && (
              <div className="flex gap-2">
                {p.demo && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
                {p.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        ))}

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <a href="https://github.com/amaan330" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>View more on GitHub</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Projects
