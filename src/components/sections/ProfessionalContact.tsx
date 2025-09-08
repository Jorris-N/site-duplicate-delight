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
  ExternalLink
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Professional inquiry submitted:", formData);
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
      value: "hello@jorris.dev",
      description: "Professional inquiries & project discussions",
      action: "Send Email",
      href: "mailto:hello@jorris.dev",
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
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+27 (083) 123-4567",
      description: "Quick questions & urgent matters",
      action: "Message",
      href: "https://wa.me/27831234567",
      primary: false
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "@jorrisdev",
      description: "Professional networking & opportunities",
      action: "Connect",
      href: "https://linkedin.com/in/jorrisdev",
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
      status: "Based in South Africa (GMT+2)",
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? I'm here to help turn your vision into a powerful digital solution.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <AnimatedElement delay={0.2}>
              <div>
                <h2 className="text-2xl font-heading font-semibold mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className={`bg-card border-border shadow-card hover:shadow-glow transition-all duration-500 ${method.primary ? 'border-primary/50' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${method.primary ? 'bg-primary/10' : 'bg-muted'}`}>
                              <div className={method.primary ? 'text-primary' : 'text-muted-foreground'}>
                                {method.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold">{method.title}</h3>
                              <p className="text-foreground font-medium">{method.value}</p>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </div>
                          <Button 
                            variant={method.primary ? "default" : "outline"} 
                            size="sm"
                            className="group"
                            asChild
                          >
                            <a href={method.href} target="_blank" rel="noopener noreferrer">
                              {method.action}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <Card className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Coffee className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">Current Availability</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-sm">{item.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">
                      I typically work with clients worldwide and am comfortable with different time zones and remote collaboration.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Call
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Star className="mr-2 h-4 w-4" />
                        View Testimonials
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>

          {/* Professional Contact Form */}
          <AnimatedElement delay={0.6}>
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

                  <Button type="submit" size="lg" className="w-full group font-medium">
                    <Send className="w-4 h-4 mr-2" />
                    Send Project Inquiry
                    <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I'll respond within 2-4 hours with project feasibility, timeline, and next steps.
                  </p>
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>

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