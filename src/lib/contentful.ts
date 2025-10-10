import { createClient, Entry } from 'contentful';

// Contentful client configuration
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

// TypeScript interface for techBlog content type
export interface TechBlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string; // Full markdown body
    image: {
      fields: {
        file: {
          url: string;
          details?: {
            image?: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    featured?: boolean;
    tags?: string[];
  };
}

// Calculate reading time from markdown content
export const calculateReadingTime = (markdown: string): string => {
  const wordsPerMinute = 225;
  const words = markdown.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Get preview text from markdown (first 150 characters)
export const getPreviewText = (markdown: string): string => {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/[#*_~\[\]]/g, '') // Remove markdown syntax
    .trim();
  
  return plainText.length > 150 
    ? plainText.substring(0, 150) + '...' 
    : plainText;
};

// Fetch all articles, sorted by newest first
export const getAllArticles = async (): Promise<TechBlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'techBlog',
      order: ['-sys.createdAt'],
    });
    return response.items as unknown as TechBlogPost[];
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

// Fetch single article by slug
export const getArticleBySlug = async (slug: string): Promise<TechBlogPost | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'techBlog',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (response.items.length === 0) {
      return null;
    }
    
    return response.items[0] as unknown as TechBlogPost;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};

// Fetch featured articles
export const getFeaturedArticles = async (): Promise<TechBlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'techBlog',
      'fields.featured': true,
      order: ['-sys.createdAt'],
      limit: 6,
    });
    return response.items as unknown as TechBlogPost[];
  } catch (error) {
    console.error('Error fetching featured articles:', error);
    throw error;
  }
};

// Search articles by title or content
export const searchArticles = async (query: string): Promise<TechBlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'techBlog',
      query: query,
      order: ['-sys.createdAt'],
    });
    return response.items as unknown as TechBlogPost[];
  } catch (error) {
    console.error('Error searching articles:', error);
    throw error;
  }
};

// TypeScript interface for portfolioListings content type
export interface PortfolioProject {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    image: {
      fields: {
        file: {
          url: string;
          details?: {
            image?: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    links: string; // Updated to a string field instead of an object
  };
}

// Fetch all portfolio projects, sorted by creation date (newest first)
export const getAllProjects = async (): Promise<PortfolioProject[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'portfolioListings',
      order: ['-sys.createdAt'],
    });
    return response.items as unknown as PortfolioProject[];
  } catch (error) {
    console.error('Error fetching portfolio projects:', error);
    throw error;
  }
};

// Fetch first 6 projects as featured
export const getFeaturedProjects = async (): Promise<PortfolioProject[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'portfolioListings',
      order: ['-sys.createdAt'],
      limit: 6,
    });
    return response.items as unknown as PortfolioProject[];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    throw error;
  }
};
