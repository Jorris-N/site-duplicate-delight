import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Code2, Briefcase, GraduationCap, Award, ExternalLink, Download } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    { name: "Next.js", level: "Expert", years: "4+" },
    { name: "React", level: "Advanced", years: "4+" },
    { name: "TypeScript", level: "Advanced", years: "3+" },
    { name: "JavaScript", level: "Expert", years: "4+" },
    { name: "Tailwind", level: "Expert", years: "4+" },
  ];

  const achievements = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Certified Web Developer",
      description: "CipherByte Technologies",
      year: "2024"
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Git Training",
      description: "SimpleLearn",
      year: "2022"
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Frontend Lead Experience",
      description: "Led development of several websites",
      year: "2022-2025"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through clean code and innovative solutions
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <AnimatedElement delay={0.2}>
            <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-500">
              <CardContent className="p-4 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">Professional Journey</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    With over <span className="text-primary font-medium">4 years of experience</span> in frontend development, 
                    I've had the privilege of working with innovative startups and established enterprises, helping them 
                    transform ideas into scalable digital solutions.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise spans the entire frontend ecosystem, from crafting pixel-perfect interfaces to architecting 
                    complex state management solutions. I'm passionate about performance optimization, accessibility, 
                    and creating maintainable codebases that scale with business growth.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Badge variant="secondary">React Ecosystem</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Performance Optimization</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" href="/Jorris-Nyange-Resume.pdf" target="_blank" size="sm" className="group">
                      <Download className="mr-2 h-4 w-4" />
                      Full Resume
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Credentials
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* Skills & Expertise */}
          <div className="space-y-6">
            <AnimatedElement delay={0.4}>
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Technical Expertise</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium">{skill.name}</div>
                          <div className="text-sm text-muted-foreground">{skill.years} experience</div>
                        </div>
                        <Badge variant={skill.level === 'Expert' ? 'default' : 'secondary'}>
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
        <div>
            <AnimatedElement delay={0.6} className="py-16">
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-4 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Achievements</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-muted/20 rounded-lg border border-border/50">
                        <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{achievement.title}</h4>
                            <span className="text-sm text-muted-foreground">{achievement.year}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
        </div>
      </div>
    </section>
  );
};