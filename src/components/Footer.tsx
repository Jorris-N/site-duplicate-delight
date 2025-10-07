
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
    { icon: <MapPin className="w-4 h-4" />, text: 'Mombasa, Kenya' },
    { icon: <Phone className="w-4 h-4" />, text: '+254 723 942 143' },
    { icon: <MessageCircle className="w-4 h-4" />, text: '+254 734 007 656' },
    { icon: <Mail className="w-4 h-4" />, text: 'nyangejorris@gmail.com' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/jorris-nyange', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Jorris-N', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"></path></svg>, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:nyangejorris@gmail.com', label: 'Email', color: 'hover:text-red-400' },
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
              <div className="flex flex-col items-start gap-3">
                <div className="w-15 h-15 rounded-lg flex items-center justify-center ">
                  <img src="/images/no-bg-logo.png" alt="" className="relative" style={{height: "65px", width: "100px"}} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Jorris</h3>
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
              <span>© 2025 Jorris. All rights reserved.</span>
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
