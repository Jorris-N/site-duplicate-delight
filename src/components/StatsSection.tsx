import { Award, Users, Coffee, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const finalValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < finalValue) {
            return Math.min(prev + Math.ceil(finalValue / 50), finalValue);
          }
          return finalValue;
        });
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [finalValue, delay]);

  return (
    <div className="text-center group animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-card border border-border rounded-2xl mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
        <div className="text-primary text-2xl">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {count}{value.includes('+') ? '+' : ''}
      </div>
      <div className="text-muted-foreground text-sm font-medium">
        {label}
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: <Award />,
      value: "50+",
      label: "Projects Completed",
      delay: 200,
    },
    {
      icon: <Users />,
      value: "30+",
      label: "Happy Clients",
      delay: 400,
    },
    {
      icon: <Coffee />,
      value: "1000+",
      label: "Cups of Coffee",
      delay: 600,
    },
    {
      icon: <Calendar />,
      value: "3+",
      label: "Years Experience",
      delay: 800,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};