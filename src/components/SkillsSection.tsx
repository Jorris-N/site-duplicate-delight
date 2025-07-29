import { Button } from "@/components/ui/button";
import { 
  Code, 
  Globe, 
  Palette, 
  Smartphone, 
  Figma, 
  Zap,
  ArrowRight 
} from "lucide-react";
import { AnimatedElement } from "@/components/AnimatedElement";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard = ({ icon, title, description, delay }: SkillCardProps) => {
  return (
    <AnimatedElement animation="reveal" delay={delay} interactive>
      <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:shadow-card hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:animate-bounce-subtle">
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 group-hover:animate-wiggle transition-all duration-300">
          <div className="text-primary text-xl group-hover:animate-bounce-subtle">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:animate-pulse-glow">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </AnimatedElement>
  );
};

export const SkillsSection = () => {
  const skills = [
    {
      icon: <Code />,
      title: "React Development",
      description: "React, Next.js, TypeScript, Hooks",
      delay: 0,
    },
    {
      icon: <Globe />,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript ES6+",
      delay: 200,
    },
    {
      icon: <Palette />,
      title: "CSS Frameworks",
      description: "Tailwind CSS, SCSS, Styled Components",
      delay: 400,
    },
    {
      icon: <Smartphone />,
      title: "Responsive Design",
      description: "Mobile-first, Cross-browser compatibility",
      delay: 600,
    },
    {
      icon: <Figma />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Prototyping",
      delay: 800,
    },
    {
      icon: <Zap />,
      title: "Performance Optimization",
      description: "Core Web Vitals, SEO, Accessibility",
      delay: 1000,
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="elastic" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent hover:animate-gradient-shift cursor-default">
                Skills & Services
              </span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I specialize in modern frontend technologies and deliver responsive web applications that combine technical excellence with exceptional user experience.
            </p>
          </AnimatedElement>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={skill.delay}
            />
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedElement animation="scale-in" delay={1200} interactive>
          <div className="text-center bg-gradient-card border border-border rounded-3xl p-12 hover:shadow-glow transition-all duration-500">
            <AnimatedElement animation="bounce-subtle" delay={1400}>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay={1600}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="elastic" delay={1800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="group hover:animate-bounce-subtle">
                  💼 Hire Me Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2 group-hover:animate-wiggle" />
                </Button>
                <Button variant="glass" size="lg" className="hover:animate-bounce-subtle">
                  Get In Touch
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};