import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { FileText, ExternalLink } from 'lucide-react'

const Research = () => {
  const papers = [
    {
      title: 'Voice Prescription using Natural Language Understanding',
      venue: 'Institute of Electrical and Electronics Engineers (IEEE)',
      year: '2022',
      link: 'https://ieeexplore.ieee.org/document/9807998'
    },
    {
      title: 'Speech Recognition Based Prescription Generator',
      venue: 'Social Science Research Network (SSRN)',
      year: '2021',
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3867738'
    },
  ]

  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Research Papers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {papers.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-4 rounded-md bg-secondary/20 border border-secondary/30"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.venue} • {p.year}</div>
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="text-primary inline-flex items-center gap-1 text-sm">
                  View <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Research


