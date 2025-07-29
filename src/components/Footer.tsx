
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Articles', href: '/articles' },
    { name: 'Contact', href: '/contact' },
    { name: 'Hire Me', href: '/hire-me' },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: 'San Francisco, CA' },
    { icon: <Phone className="w-4 h-4" />, text: '+1 (555) 123-4567' },
    { icon: <MessageCircle className="w-4 h-4" />, text: 'WhatsApp' },
    { icon: <Mail className="w-4 h-4" />, text: 'hello@johndeveloper.com' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@johndeveloper.com', label: 'Email', color: 'hover:text-red-400' },
  ];

  return (
    <footer className="bg-gradient-card border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">John Developer</h3>
                  <p className="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creating beautiful, responsive web applications with modern technologies 
                and exceptional user experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
                  >
                    <span className="relative inline-block">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Me */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-background border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300 group ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Stay updated with my latest projects and insights.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 John Developer. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse hidden md:inline" />
              <span className="hidden md:inline">using React & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
