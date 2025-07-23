
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "React", "JavaScript", "TypeScript", "CSS", "Performance"];

  const articles = [
    {
      id: 1,
      title: "Building Modern React Applications with TypeScript",
      excerpt: "Learn how to leverage TypeScript's powerful type system to build more robust and maintainable React applications.",
      category: "React",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      featured: true,
      image: "⚛️",
      tags: ["React", "TypeScript", "Best Practices"],
    },
    {
      id: 2,
      title: "Advanced CSS Grid Techniques for Modern Layouts",
      excerpt: "Explore advanced CSS Grid features and techniques to create complex, responsive layouts with ease.",
      category: "CSS",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      featured: true,
      image: "🎨",
      tags: ["CSS", "Grid", "Responsive Design"],
    },
    {
      id: 3,
      title: "Optimizing React Performance: Best Practices",
      excerpt: "Discover proven techniques to optimize React application performance and improve user experience.",
      category: "Performance",
      readTime: "15 min read",
      date: "Dec 5, 2024",
      featured: false,
      image: "⚡",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      id: 4,
      title: "Understanding JavaScript Closures and Scope",
      excerpt: "Deep dive into JavaScript closures, lexical scope, and how they affect your code execution.",
      category: "JavaScript",
      readTime: "10 min read",
      date: "Nov 28, 2024",
      featured: false,
      image: "🔍",
      tags: ["JavaScript", "Fundamentals", "Closures"],
    },
    {
      id: 5,
      title: "TypeScript Utility Types: A Complete Guide",
      excerpt: "Master TypeScript's built-in utility types and learn how to create your own custom types.",
      category: "TypeScript",
      readTime: "14 min read",
      date: "Nov 22, 2024",
      featured: true,
      image: "📝",
      tags: ["TypeScript", "Types", "Utilities"],
    },
    {
      id: 6,
      title: "CSS Animation Techniques for Better UX",
      excerpt: "Learn how to use CSS animations effectively to enhance user experience without overwhelming users.",
      category: "CSS",
      readTime: "9 min read",
      date: "Nov 18, 2024",
      featured: false,
      image: "🎭",
      tags: ["CSS", "Animation", "UX"],
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Articles & Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sharing knowledge about modern web development, best practices, 
            and emerging technologies in the frontend world.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "hero" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-300"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Articles
            </span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article 
                key={article.id} 
                className="bg-gradient-card border border-border rounded-2xl p-6 hover:shadow-glow hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-6 text-center">{article.image}</div>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              All Articles
            </span>
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <article 
                  key={article.id} 
                  className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/50 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{article.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-gradient-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Get notified when I publish new articles about web development and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
