import React from 'react';

const ColorPalettePreview = () => {
  const palettes = [
    {
      name: "Corporate Blue",
      description: "Most traditional & professional - Perfect for tech companies, consulting",
      class: "corporate-blue",
      appeal: "★★★★★ Traditional",
      colors: {
        primary: "hsl(214, 84%, 56%)",
        accent: "hsl(214, 84%, 66%)",
        background: "hsl(220, 26%, 8%)",
        card: "hsl(220, 26%, 10%)"
      }
    },
    {
      name: "Modern Slate", 
      description: "Sophisticated neutral - Great for design agencies, modern startups",
      class: "modern-slate",
      appeal: "★★★★☆ Sophisticated",
      colors: {
        primary: "hsl(215, 25%, 27%)",
        accent: "hsl(215, 25%, 37%)",
        background: "hsl(215, 28%, 9%)",
        card: "hsl(215, 28%, 11%)"
      }
    },
    {
      name: "Refined Purple",
      description: "Toned down current - Tech companies, creative roles",
      class: "refined-purple", 
      appeal: "★★★☆☆ Creative-Professional",
      colors: {
        primary: "hsl(250, 40%, 50%)",
        accent: "hsl(250, 40%, 60%)",
        background: "hsl(220, 26%, 8%)",
        card: "hsl(220, 26%, 10%)"
      }
    },
    {
      name: "Executive Charcoal",
      description: "Ultra professional - Banking, finance, law firms",
      class: "executive-charcoal",
      appeal: "★★★★★ Ultra-Professional", 
      colors: {
        primary: "hsl(210, 11%, 25%)",
        accent: "hsl(210, 11%, 35%)",
        background: "hsl(210, 11%, 6%)",
        card: "hsl(210, 11%, 8%)"
      }
    },
    {
      name: "Warm Professional",
      description: "Approachable yet professional - Creative agencies, personal brands",
      class: "warm-professional",
      appeal: "★★★☆☆ Approachable",
      colors: {
        primary: "hsl(25, 25%, 45%)",
        accent: "hsl(25, 25%, 55%)",
        background: "hsl(20, 6%, 8%)",
        card: "hsl(20, 6%, 10%)"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Color Palette Options
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a color scheme that matches your target industry and professional goals. 
            Each palette is optimized for accessibility and professional appeal.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {palettes.map((palette, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{palette.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{palette.description}</p>
                <div className="text-xs font-medium text-accent">{palette.appeal}</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Primary</span>
                  <div 
                    className="w-8 h-8 rounded border"
                    style={{ backgroundColor: palette.colors.primary }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accent</span>
                  <div 
                    className="w-8 h-8 rounded border"
                    style={{ backgroundColor: palette.colors.accent }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Background</span>
                  <div 
                    className="w-8 h-8 rounded border"
                    style={{ backgroundColor: palette.colors.background }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Card</span>
                  <div 
                    className="w-8 h-8 rounded border"
                    style={{ backgroundColor: palette.colors.card }}
                  />
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Sample UI</h4>
                <div className="space-y-2">
                  <div 
                    className="h-8 rounded text-white flex items-center justify-center text-sm font-medium"
                    style={{ background: `linear-gradient(135deg, ${palette.colors.primary}, ${palette.colors.accent})` }}
                  >
                    Primary Button
                  </div>
                  <div 
                    className="h-6 rounded"
                    style={{ backgroundColor: palette.colors.card }}
                  />
                  <div 
                    className="h-4 rounded w-3/4"
                    style={{ backgroundColor: palette.colors.accent, opacity: 0.3 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card p-8 rounded-lg border border-border">
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Step 1:</strong> Choose your preferred palette from above
            </p>
            <p>
              <strong className="text-foreground">Step 2:</strong> Copy the CSS variables from <code className="bg-muted px-2 py-1 rounded">src/styles/color-options.css</code>
            </p>
            <p>
              <strong className="text-foreground">Step 3:</strong> Replace the corresponding variables in your <code className="bg-muted px-2 py-1 rounded">src/index.css</code> :root section
            </p>
            <p>
              <strong className="text-foreground">Recommendation:</strong> For maximum professional appeal, choose <strong>Corporate Blue</strong> or <strong>Executive Charcoal</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalettePreview;