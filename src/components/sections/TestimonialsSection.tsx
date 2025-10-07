import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedElement } from "@/components/AnimatedElement";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
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
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Client <span className="bg-gradient-primary bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={0.2 * (index + 1)}>
              <Card className="bg-card border-border shadow-card hover:shadow-glow transition-all duration-500 h-full">
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};