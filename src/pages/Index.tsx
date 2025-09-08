
import { Navigation } from "@/components/Navigation";
import { ProfessionalHeroSection } from "@/components/ProfessionalHeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProfessionalHeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;
