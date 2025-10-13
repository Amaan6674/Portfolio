import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Code, Database, Globe, Cpu, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-4 w-4" />,
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C/C++",
        "C#",
        "PHP",
        "HTML",
        "CSS",
        "SQL"
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="h-4 w-4" />,
      skills: [
        "LangChain",
        "LangGraph",
        "n8n",
        "React",
        "Node.js",
        "Django",
        "Flask",
        "Express",
        "LangChain",
        "TensorFlow",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      title: "Developer Tools",
      icon: <Cpu className="h-4 w-4" />,
      skills: [
        "Playwright",
        "Git",
        "Redmine",
        "VS Code",
        "Visual Studio",
        "Eclipse",
        "Firebase",
        "Cursor",
        "ChatGPT",
        "Gemini",
        "Claude"
      ]
    },
    {
      title: "Professional Skills",
      icon: <Users className="h-4 w-4" />,
      skills: [
        "Team Collaboration",
        "Problem Solving",
        "Leadership",
        "Communication",
        "Critical Thinking",
        "Adaptability"
      ]
    }
  ]

  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Skills & Technologies
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              {category.icon}
              {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Skills
