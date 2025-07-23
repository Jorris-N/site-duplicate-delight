import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Code, Briefcase, GraduationCap, Download, Heart } from "lucide-react";
import { AnimatedElement } from "@/components/AnimatedElement";

const About = () => {
  const timeline = [
    {
      year: "2021-Present",
      title: "Senior Frontend Developer", 
      company: "Tech Innovation Corp",
      description: "Leading frontend development for multiple web applications, mentoring junior developers, and implementing modern React patterns.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      year: "2019-2021",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      description: "Developed responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with design teams to implement pixel-perfect UIs.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2018-2019",
      title: "Junior Web Developer",
      company: "Startup Hub",
      description: "Started my professional journey building websites and learning modern web technologies. Focused on JavaScript, HTML5, and CSS3.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript ES6+", level: 95 },
    { name: "CSS3 & Tailwind", level: 88 },
    { name: "Node.js", level: 75 },
    { name: "Git & GitHub", level: 92 },
  ];

  const interests = [
    { icon: <Code className="w-6 h-6" />, title: "Open Source", description: "Contributing to open source projects" },
    { icon: <Heart className="w-6 h-6" />, title: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: <MapPin className="w-6 h-6" />, title: "Travel", description: "Exploring new places and cultures" },
    { icon: <Calendar className="w-6 h-6" />, title: "Learning", description: "Continuous skill development" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate frontend developer with over 5 years of experience creating 
                beautiful, responsive web applications. I love turning complex problems into 
                simple, beautiful designs that provide exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Available for freelance</span>
                </div>
              </div>
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={200}>
              <div className="bg-gradient-card border border-border rounded-3xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">John Developer</h3>
                <p className="text-muted-foreground">Frontend Developer & UI/UX Enthusiast</p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
          </AnimatedElement>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedElement 
                  key={index} 
                  animation="fade-in-left"
                  delay={index * 200}
                >
                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-card border-2 border-primary rounded-full flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1 bg-gradient-card border border-border rounded-xl p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                          <p className="text-primary font-medium">{item.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedElement 
                key={index} 
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Personal Interests
              </span>
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <AnimatedElement 
                key={index} 
                animation="scale-in"
                delay={index * 100}
              >
                <div className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary mb-4 flex justify-center">
                    {interest.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground text-sm">{interest.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get In Touch
              </Button>
              <Button variant="glass" size="lg">
                View My Work
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
