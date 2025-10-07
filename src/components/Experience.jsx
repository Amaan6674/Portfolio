import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Briefcase, MapPin, Calendar, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "Zeus Learning",
      position: "Software Developer",
      location: "Mumbai, India",
      duration: "Jul 2023 – Sep 2025",
      description:
        "Developing innovative educational technology solutions and collaborative tools for enhanced classroom interaction.",
      achievements: [
        "Designed and implemented array support in graphing calculator with custom Jison grammar",
        "Built real-time collaborative tool for multimedia content sharing",
        "Enhanced geometry tools in Annotate.net web extension with improved UX",
        "Optimized loading performance by 40% for large course datasets",
        "Developed modern UI design for web applications",
        "Built course cloning feature with proper ownership handling",
        "Created end-to-end automation test scripts using Playwright",
      ],
    },
    {
      company: "Automata",
      position: "Full Stack Developer Intern",
      location: "Mumbai, India",
      duration: "Aug 2022 – May 2023",
      description:
        "Contributed to the development of a subscription-based e-commerce platform, focusing on end-to-end functionality and responsive design.",
      achievements: [
        "Designed and optimized a responsive UI for desktop and mobile users, enhancing user experience and engagement",
        "Developed and integrated RESTful APIs to manage subscriptions, product browsing, and checkout workflows",
        "Ensured seamless data flow between frontend and backend, improving platform reliability",
      ],
    }
    
  ]

  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="space-y-4"
          >
            {/* Desktop layout - hidden on mobile */}
            <div className="hidden md:flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Building className="h-4 w-4" />
                  {exp.company}
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="flex items-center gap-1 justify-end">
                  <Calendar className="h-3 w-3" /> {exp.duration}
                </div>
                <div className="flex items-center gap-1 mt-1 justify-end">
                  <MapPin className="h-3 w-3" /> {exp.location}
                </div>
              </div>
            </div>
            
            {/* Mobile layout - hidden on large screens */}
            <div className="md:hidden space-y-2">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Building className="h-4 w-4" />
                {exp.company}
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {exp.duration}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {exp.location}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

            <div>
              <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Experience
