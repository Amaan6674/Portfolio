import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "M.Sc. Data Science",
      institution: "Berliner Hochschule für Technik (BHT)",
      location: "Berlin, Germany",
      duration: "Oct 2025 - Current",
      status: "Ongoing",
      description: "Coursework: Mathematics, Business Intelligence, Advance Software Engineering, Big Data, Data Science"
    },
    {
      degree: "B.E. Computer Engineering",
      institution: "University of Mumbai",
      location: "Mumbai, India",
      duration: "Aug 2019 - May 2023",
      grade: "9.60 CGPA",
      status: "Completed",
      description: "Coursework: Data Structures and Algorithms, Computer Networks, Operating Systems, Database Management Systems, Software Engineering, Theory of Computation"
    }
  ]

  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-primary" />
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="space-y-3 p-4 rounded-lg bg-secondary/20 border border-secondary/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{edu.degree}</h3>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                edu.status === 'Ongoing' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
                {edu.status}
              </span>
            </div>

            <div className="text-primary font-medium">
              {edu.institution}
            </div>

            {/* Desktop layout - hidden on mobile */}
            <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {edu.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {edu.duration}
              </div>
              {edu.grade && (
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {edu.grade}
                </span>
              )}
            </div>
            
            {/* Mobile layout - hidden on large screens */}
            <div className="md:hidden space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {edu.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {edu.duration}
              </div>
              {edu.grade && (
                <div className="flex justify-start">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                    {edu.grade}
                  </span>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

export default Education
