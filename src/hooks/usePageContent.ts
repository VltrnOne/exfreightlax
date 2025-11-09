import { useState, useEffect } from 'react';

export function usePageContent(contentPath: string) {
  const [html, setHtml] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/content/${contentPath}.html`);
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }
        const htmlContent = await response.text();
        
        // Extract main content from body
        const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
          let content = bodyMatch[1];
          
          // Remove scripts and styles
          content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
          content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
          content = content.replace(/<!--[\s\S]*?-->/g, '');
          
          // Convert relative URLs to absolute
          content = content.replace(/src="\//g, 'src="https://www.exfreight.com/');
          content = content.replace(/href="\//g, 'href="https://www.exfreight.com/');
          
          setHtml(content);
        } else {
          setHtml(htmlContent);
        }
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
        console.error('Error loading content:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentPath]);

  return { html, loading, error };
}

