import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from './ui/button';

interface MarkdownRendererProps {
  content: string;
}

const CodeBlock = ({ language, value }: { language: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute top-3 right-3 z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2 bg-background/80 backdrop-blur-sm"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      {language && (
        <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-primary/20 text-primary text-xs rounded">
          {language}
        </div>
      )}
      <SyntaxHighlighter
        language={language || 'text'}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: '0.75rem',
          padding: '2rem 1rem 1rem 1rem',
          fontSize: '0.9rem',
          background: 'hsl(var(--muted))',
        }}
        showLineNumbers
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground bg-gradient-primary bg-clip-text text-transparent">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground border-b border-border pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mt-4 mb-2 text-foreground">
              {children}
            </h4>
          ),
          
          // Paragraphs
          p: ({ children }) => (
            <p className="my-4 leading-relaxed text-foreground/90">
              {children}
            </p>
          ),
          
          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : '_self'}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-primary hover:underline font-medium transition-colors"
            >
              {children}
            </a>
          ),
          
          // Code blocks and inline code
          code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const value = String(children).replace(/\n$/, '');
            
            if (!inline && match) {
              return <CodeBlock language={match[1]} value={value} />;
            }
            
            return (
              <code
                className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary border border-border"
                {...props}
              >
                {children}
              </code>
            );
          },
          
          // Lists
          ul: ({ children }) => (
            <ul className="my-4 space-y-2 list-disc list-inside text-foreground/90">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 space-y-2 list-decimal list-inside text-foreground/90">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-4 border-primary pl-6 py-2 bg-muted/30 italic text-foreground/90">
              {children}
            </blockquote>
          ),
          
          // Tables
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-border bg-background">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-muted/50 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-6 py-4 text-sm text-foreground/90">{children}</td>
          ),
          
          // Images
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ''}
              className="rounded-lg my-6 w-full h-auto shadow-card"
              loading="lazy"
            />
          ),
          
          // Horizontal rule
          hr: () => <hr className="my-8 border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
