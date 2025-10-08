import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedElement } from "@/components/AnimatedElement";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Github, 
  Linkedin, 
  Calendar,
  Coffee,
  CheckCircle,
  Star,
  MessageSquare,
  ExternalLink,
  Loader2
} from "lucide-react";

export const ProfessionalContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
    projectType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      timeline: "",
      message: "",
      projectType: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "nyangejorris@gmail.com",
      description: "Professional inquiries & project discussions",
      action: "Send Email",
      href: "mailto:nyangejorris@gmail.com",
      primary: true
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Call",
      value: "30-min consultation",
      description: "Free project consultation call",
      action: "Book Meeting",
      href: "#",
      primary: false
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
      title: "WhatsApp",
      value: "+254 734 007 656",
      description: "Quick questions & urgent matters",
      action: "Message",
      href: "https://wa.me/254734007656",
      primary: false
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "@jorris",
      description: "Professional networking & opportunities",
      action: "Connect",
      href: "https://linkedin.com/in/jorris-nyange",
      primary: false
    }
  ];

  const availability = [
    {
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      status: "Available for new projects",
      color: "text-green-400"
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-400" />,
      status: "Response time: 2-4 hours",
      color: "text-blue-400"
    },
    {
      icon: <MapPin className="w-5 h-5 text-purple-400" />,
      status: "Based in Kenya (GMT+3)",
      color: "text-purple-400"
    }
  ];

  const projectTypes = [
    "Web Application Development",
    "E-commerce Platform",
    "Mobile App Development", 
    "UI/UX Implementation",
    "Technical Consulting",
    "Code Review & Optimization",
    "Other"
  ];

  const budgetRanges = [
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000+",
    "Let's discuss"
  ];

  return (
    <section className="pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement>
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? I'm here to help turn your vision into a powerful digital solution.
            </p>
          </div>
        </AnimatedElement>

                {/* Contact Methods in a single row */}
        <AnimatedElement delay={0.4}>
          <div className="py-16">
            <h2 className="text-2xl font-heading text-center font-semibold mb-6">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className={`bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 ${method.primary ? 'border-primary/50' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-2 rounded-lg mb-2 ${method.primary ? 'bg-primary/10' : 'bg-muted'}`}>
                        <div className={method.primary ? 'text-primary' : 'text-muted-foreground'}>
                          {method.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm">{method.title}</h3>
                      <p className="text-foreground font-medium text-sm">{method.value}</p>
                      <Button 
                        variant={method.primary ? "default" : "outline"} 
                        size="sm"
                        className="group mt-2 w-full"
                        asChild
                      >
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.action}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedElement>

        <div className="flex flex-col gap-12">
          {/* Professional Contact Form */}
          <AnimatedElement delay={0.2}>
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-semibold mb-6">
                  Start Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        placeholder="3-6 months"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                      placeholder="Tell me about your project goals, target audience, key features, and any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group font-medium" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Project Inquiry
                        <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I'll respond within 2-4 hours with project feasibility, timeline, and next steps.
                  </p>
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>

        {/* Availability Section */}
        <AnimatedElement delay={0.6} className="py-16 max-w-lg mx-auto">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4 justify-center pb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">Current Availability</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm">{item.status}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Call
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Star className="mr-2 h-4 w-4" />
                    Testimonials
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>

        {/* FAQ Section */}
        <AnimatedElement delay={0.8}>
          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your development process?",
                  answer: "I follow an agile approach with regular communication, milestone reviews, and iterative feedback. Projects typically include discovery, design approval, development, testing, and deployment phases."
                },
                {
                  question: "Do you provide ongoing maintenance?",
                  answer: "Yes, I offer various maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements to keep your application running smoothly."
                },
                {
                  question: "What technologies do you work with?",
                  answer: "I specialize in React, TypeScript, Next.js, Node.js, and modern web technologies. I also work with various databases, cloud platforms, and third-party integrations."
                },
                {
                  question: "How do you handle project communication?",
                  answer: "I maintain regular communication through Slack, email, or your preferred platform. I provide weekly progress reports and am available for calls to discuss project updates."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-card border-border shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};