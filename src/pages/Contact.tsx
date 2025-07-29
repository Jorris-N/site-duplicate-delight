import { Navigation } from "@/components/Navigation";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@johndeveloper.com",
      description: "Send me an email anytime!",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call me for urgent inquiries",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:hello@johndeveloper.com",
      color: "hover:text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedElement 
                key={index} 
                animation="scale-in"
                delay={index * 100}
              >
                <div className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-2">{info.value}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedElement animation="fade-in-up">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Send Me a Message
                  </span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedElement>

            {/* Additional Info */}
            <AnimatedElement animation="fade-in-up" delay={300}>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </h2>
                <div className="bg-gradient-card border border-border rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Available for New Projects</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm currently available for freelance projects and full-time opportunities. 
                    Whether you need a simple website or a complex web application, I'm here to help.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Available for freelance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Open to full-time opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Remote work preferred</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with my latest projects and insights.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`p-3 bg-background border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
          </AnimatedElement>
          <div className="space-y-6">
            {[
              {
                question: "What is your typical response time?",
                answer: "I usually respond to emails within 24 hours, often much sooner. For urgent matters, feel free to call me directly.",
              },
              {
                question: "What types of projects do you work on?",
                answer: "I specialize in frontend development, including React applications, responsive websites, e-commerce platforms, and UI/UX implementation.",
              },
              {
                question: "Do you work with international clients?",
                answer: "Yes, I work with clients worldwide. I'm comfortable with remote collaboration and different time zones.",
              },
              {
                question: "What are your rates?",
                answer: "My rates vary depending on the project scope and requirements. Please contact me with your project details for a custom quote.",
              },
            ].map((faq, index) => (
              <AnimatedElement 
                key={index} 
                animation="fade-in-up"
                delay={index * 100}
              >
                <div className="bg-gradient-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
