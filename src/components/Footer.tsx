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
    { icon: <MapPin className="w-4 h-4" />, text: 'Kenya', href: '#' },
    { icon: <Phone className="w-4 h-4" />, text: '+254 723 942 143', href: 'tel:+254723942143' },
    { icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>, text: '+254 734 007 656', href: 'https://wa.me/254734007656' },
    { icon: <Mail className="w-4 h-4" />, text: 'nyangejorris@gmail.com', href: 'mailto:nyangejorris@gmail.com' },
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
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </a>
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
