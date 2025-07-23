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

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SkillCard = ({ icon, title, description, delay }: SkillCardProps) => {
  return (
    <div 
      className="bg-gradient-card border border-border rounded-2xl p-6 hover:shadow-card hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <div className="text-primary text-xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            I specialize in modern frontend technologies and deliver responsive web applications that combine technical excellence with exceptional user experience.
          </p>
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
        <div className="text-center bg-gradient-card border border-border rounded-3xl p-12 animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              💼 Hire Me Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};