import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Sparkles } from 'lucide-react'

const Highlights = () => {
  const achievements = [
    { text: '1st Prize at SHODH National Level Project Competition, Gharda Institute of Technology.', link: 'https://drive.google.com/file/d/1U6g-aLv3BgcIWs2NpRwD881oayLI77V5/view?usp=sharing' },
    { text: '3rd Prize at IMPETUS International Project Competition, Pune Institute of Technology.', link: 'https://drive.google.com/file/d/1TUOtNSAUwyAVoCvsQHfbJ0miX7Vglq3V/view?usp=sharing' },
  ]

  const activities = [
    'Core member of Programmer Club.',
    'Organized CodeFeast Coding Competition and ERR 404 5.0 Hackathon.',
  ]

  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Highlights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Achievements</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {achievements.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="flex items-start justify-between gap-3"
              >
                <span>• {item.text}</span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-primary text-xs whitespace-nowrap">View</a>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Extra Curricular</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {activities.map((t, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: i * 0.05 }}>
                • {t}
              </motion.li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export default Highlights


