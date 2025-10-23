import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import {
  User,
  MapPin,
  Calendar,
  Mail,
  Linkedin,
  Download,
  Github,
  X,
} from "lucide-react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

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
              src="/amaan.png"
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
          A Software Developer turned Data Science Student with 2+ years of
          experience in building full-stack applications , contributing to
          end-to-end development , and solving complex software challenges.
        </p>

        <div className="flex flex-wrap gap-3">
          {/* Single button that opens language selection modal */}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" /> Download Resume
          </button>
          <a
            href="mailto:amaanshaikh6674@gmail.com"
            className="px-3 py-2 border border-border rounded-md text-sm inline-flex items-center gap-2 hover:bg-accent"
          >
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
          <a
            href="https://www.linkedin.com/in/amaan330"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-border hover:bg-accent inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Amaan6674"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-border hover:bg-accent inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-background rounded-lg p-6 w-11/12 max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Download Resume</h3>
              <button
                className="p-1 rounded hover:bg-accent"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Choose a language for the resume download:
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/Amaan_CV_EN.pdf"
                download
                className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm inline-flex items-center gap-2 justify-center"
              >
                <Download className="h-4 w-4" /> English (EN)
              </a>
              <a
                href="/Amaan_CV_DE.pdf"
                download
                className="px-3 py-2 bg-secondary text-secondary-foreground rounded-md text-sm inline-flex items-center gap-2 justify-center"
              >
                <Download className="h-4 w-4" /> Deutsch (DE)
              </a>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default About;
