import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Award } from 'lucide-react'

const Achievements = () => {
  const items = [
    { text: '1st Prize at SHODH National Level Project Competition, Gharda Institute of Technology.', link: '#' },
    { text: '3rd Prize at IMPETUS International Project Competition, Pune Institute of Technology.', link: '#' },
  ]

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: i * 0.05 }} className="flex items-start justify-between gap-3">
              <span>• {item.text}</span>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="text-primary text-xs whitespace-nowrap">View</a>
              )}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Achievements


