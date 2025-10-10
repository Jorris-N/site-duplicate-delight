import { Navigation } from "@/components/Navigation";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  ShoppingCart, 
  Globe, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Calendar,
  DollarSign,
  Clock
} from "lucide-react";
import { useState } from "react";

const HireMe = () => {
  const [selectedService, setSelectedService] = useState("web-development");

  const services = [
    {
      id: "web-development",
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with React, Next.js, and modern technologies",
      price: "Starting at KES 30,000",
      features: [
        "Responsive design",
        "Modern frameworks",
        "Performance optimization",
        "SEO friendly",
        "Cross-browser compatibility",
      ],
    },
    {
      id: "website-design",
      icon: <Globe className="w-8 h-8" />,
      title: "Website Design",
      description: "Beautiful, user-friendly websites that convert visitors into customers",
      price: "Starting at KES 20,000",
      features: [
        "Custom design",
        "User experience optimization",
        "Content management",
        "Analytics integration",
        "Maintenance included",
      ],
    },
    {
      id: "ecommerce-development",
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Development",
      description: "Powerful online stores designed to drive sales and manage inventory efficiently.",
      price: "Starting at KES 60,000",
      features: [
        "Product and inventory management",
        "Secure payment integration (Paystack, M-Pesa, etc.)",
        "Order tracking and analytics",
        "Mobile-friendly design",
        "Admin dashboard and CMS integration",
      ],
    },
    {
      id: "performance-optimization",
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Improve your website's speed and performance for better user experience",
      price: "Starting at KES 15,000",
      features: [
        "Speed optimization",
        "Core Web Vitals",
        "Code splitting",
        "Image optimization",
        "Caching strategies",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We'll discuss your project requirements, goals, and timeline to create a detailed plan.",
    },
    {
      step: "02",
      title: "Design & Development",
      description: "I'll create mockups and develop your project using the latest technologies and best practices.",
    },
    {
      step: "03",
      title: "Testing & Review",
      description: "Thorough testing across devices and browsers, followed by your review and feedback.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Project deployment and ongoing support to ensure everything runs smoothly.",
    },
  ];

  const testimonials = [
        {
          name: "Lucas",
          role: "Manager",
          company: "Lukeman Homestays & Airbnb",
          image: "/placeholder.svg",
          content: "Working with Jorris was a dream. Responsive, creative, and always exceeding our wildest web dreams. Lukeman Homestays & Airbnb is forever grateful.",
          rating: 5
        },
        {
          name: "Edson Murimi",
          role: "Founder",
          company: "Edmil Solutions Ltd.",
          image: "/placeholder.svg",
          content: "Edmil Solution's sleek website perfectly balances professional and modern. Your design genius boosted inquiries, exceeding expectations!",
          rating: 5
        },
        {
          name: "Rajab Itambo",
          role: "Director",
          company: "Heart of Hep Foundation",
          image: "/placeholder.svg",
          content: "Jorris crafted a website that beautifully showcases our stories and impact. The interactive elements are engaging and keep visitors coming back.",
          rating: 5
        }
  ];

  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement animation="fade-in-up">

            {/* Availability Badge */}
            <div className="inline-flex items-center px-4 py-2 hover:bg-primary/10 bg-green-600/20 border hover:border-primary/20 border-green-600/30 rounded-full text-green-400 text-sm font-medium mb-8 animate-fade-in ease-in-out duration-300 cursor-pointer">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" />
              Available for Projects
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Hire Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to bring your ideas to life? Let's work together to create something amazing 
              that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" href="https://calendly.com/nyangejorris/30-minute-consultation" size="lg" className="group">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="glass" href="/contact" size="lg">
                <DollarSign className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <AnimatedElement 
                key={service.id} 
                animation="scale-in"
                delay={index * 100}
              >
                <div 
                  className={`bg-gradient-card border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id 
                      ? 'border-primary shadow-glow' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Selected Service Details */}
          <AnimatedElement animation="fade-in-up">
            <div className="bg-gradient-card border border-border rounded-2xl p-8">
              {services.filter(service => service.id === selectedService).map(service => (
                <div key={service.id} className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                    <p className="text-2xl font-bold text-primary mb-6">{service.price}</p>
                    <Button variant="hero" href="/contact" size="lg" className="group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                My Process
              </span>
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedElement 
                key={index} 
                animation="fade-in-up"
                delay={index * 200}
              >
                <div className="text-center">
                  <div className="bg-gradient-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                What Clients Say
              </span>
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedElement 
                key={index} 
                animation="fade-in-up"
                delay={index * 200}
              >
                <div className="bg-gradient-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    {/* <div className="text-3xl">{testimonial.avatar}</div> */}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}  at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Availability */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Pricing & Availability
              </span>
            </h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <AnimatedElement animation="scale-in">
              <div className="bg-gradient-card border border-border rounded-xl p-6  text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="scale-in" delay={200}>
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Availability</h3>
                <p className="text-muted-foreground">Monday - Friday <br />  09:00 - 17:00</p>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="scale-in" delay={400}>
              <div className="bg-gradient-card border border-border rounded-xl p-6 text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-muted-foreground">Competitive rates</p>
              </div>
            </AnimatedElement>
          </div>
          <AnimatedElement animation="fade-in-up">
            <div className="text-center bg-gradient-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" href="https://calendly.com/nyangejorris/30-minute-consultation" size="lg" className="group">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="glass" href="mailto:nyangejorris@gmail.com" size="lg">
                  Send a Message
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default HireMe;
