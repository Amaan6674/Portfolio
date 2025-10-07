import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Users } from 'lucide-react'

const Activities = () => {
  const items = [
    'Core member of Programmer Club.',
    'Organized CodeFeast Coding Competition and ERR 404 5.0 Hackathon.',
  ]

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Extra Curricular Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((t, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, delay: i * 0.05 }}>
              • {t}
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Activities


