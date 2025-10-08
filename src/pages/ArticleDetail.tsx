import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2,
  Twitter,
  Linkedin,
  Link2
} from "lucide-react";
import { getArticleBySlug, getAllArticles, calculateReadingTime } from "@/lib/contentful";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => getArticleBySlug(slug!),
    enabled: !!slug,
  });

  const { data: allArticles } = useQuery({
    queryKey: ['articles'],
    queryFn: getAllArticles,
  });

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error loading article",
        description: "Failed to load the article. Please try again.",
      });
    }
  }, [error, toast]);

  useEffect(() => {
    if (!isLoading && !article) {
      toast({
        variant: "destructive",
        title: "Article not found",
        description: "The article you're looking for doesn't exist.",
      });
      navigate('/articles');
    }
  }, [article, isLoading, navigate, toast]);

  useEffect(() => {
    if (article) {
      document.title = `${article.fields.title} | Jorris Nyange - Full Stack Developer`;
    }
  }, [article]);

  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    const url = window.location.href;
    const title = article?.fields.title || '';

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "Article link has been copied to clipboard.",
        });
        break;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-64 mb-8" />
            <Skeleton className="h-96 w-full mb-8 rounded-2xl" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const imageUrl = article.fields.image?.fields?.file?.url 
    ? `https:${article.fields.image.fields.file.url}`
    : '';
  const publishedDate = new Date(article.sys.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const readingTime = calculateReadingTime(article.fields.excerpt);

  const relatedArticles = allArticles
    ?.filter(a => a.sys.id !== article.sys.id)
    .slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/articles" className="hover:text-primary transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-foreground">{article.fields.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      {imageUrl && (
        <div className="px-6 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-glow">
              <img
                src={imageUrl}
                alt={article.fields.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {article.fields.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img
                  src="/images/Jorris1.jpg"
                  alt="Jorris Nyange"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium text-foreground">Jorris Nyange</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {publishedDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readingTime}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleShare('twitter')}
                className="h-8 w-8"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleShare('linkedin')}
                className="h-8 w-8"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleShare('copy')}
                className="h-8 w-8"
              >
                <Link2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Article Body */}
          <MarkdownRenderer content={article.fields.excerpt} />

          {/* Back to Articles */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/articles">
              <Button variant="outline" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Related Articles
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => {
                const relatedImageUrl = relatedArticle.fields.image?.fields?.file?.url
                  ? `https:${relatedArticle.fields.image.fields.file.url}`
                  : '';
                
                return (
                  <Link
                    key={relatedArticle.sys.id}
                    to={`/articles/${relatedArticle.fields.slug}`}
                    className="group"
                  >
                    <article className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-card hover:border-primary/50 transition-all duration-300 h-full">
                      {relatedImageUrl && (
                        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={relatedImageUrl}
                            alt={relatedArticle.fields.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {relatedArticle.fields.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(relatedArticle.sys.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
