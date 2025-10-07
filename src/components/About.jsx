import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { User, MapPin, Calendar, Mail, Linkedin, Download, Github } from 'lucide-react'

const About = () => {
  return (
    <Card className="transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          About Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img 
              src="/src/assets/amaan.png" 
              alt="Amaan Shaikh" 
              className="w-28 h-28 rounded-full object-cover object-top border-4 border-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">
            Amaan Shaikh
          </h2>
          {/* <div className="text-muted-foreground">Full Stack Developer</div> */}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Berlin, Germany</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Available for opportunities</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
        A Software Developer turned Data Science Student with 2+ years of experience in building full-stack applications , contributing to end-to-end development , and solving complex software challenges.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="/src/assets/Amaan_CV.pdf" download className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm inline-flex items-center gap-2">
            <Download className="h-4 w-4" /> Resume
          </a>
          <a href="mailto:amaanshaikh6674@gmail.com" className="px-3 py-2 border border-border rounded-md text-sm inline-flex items-center gap-2 hover:bg-accent">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
        <div className="pt-4 border-t border-border">
          <h4 className="font-semibold mb-2">Languages</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>English</span>
              <span className="text-primary">C1</span>
            </div>
            <div className="flex justify-between">
              <span>German</span>
              <span className="text-primary">A1</span>
            </div>
            <div className="flex justify-between">
              <span>Hindi</span>
              <span className="text-primary">Native</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border" />
        <div className="flex justify-center gap-3">
          <a href="https://www.linkedin.com/in/amaan330" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border hover:bg-accent inline-flex">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/Amaan6674" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-border hover:bg-accent inline-flex">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default About
