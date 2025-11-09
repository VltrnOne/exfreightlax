import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface HTMLContentProps {
  html: string;
  className?: string;
}

export default function HTMLContent({ html, className = '' }: HTMLContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    // Process all links to work with React Router
    const links = containerRef.current.querySelectorAll('a[href]');
    const clickHandlers: Array<{ element: Element; handler: (e: Event) => void }> = [];
    
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Convert exfreight.com links to internal routes
      let internalPath = '';
      
      // Handle anchor links
      if (href.startsWith('#')) {
        internalPath = href;
      }
      // Handle relative paths
      else if (href.startsWith('/')) {
        // Check if it's a known route
        if (href.includes('/our-services/trucking/ltl-freight')) {
          internalPath = '/our-services/trucking/ltl-freight';
        } else if (href.includes('/our-services/trucking/ftltrucking') || href.includes('/our-services/trucking/ftl-trucking')) {
          internalPath = '/our-services/trucking/ftl-trucking';
        } else if (href.includes('/our-services/trucking')) {
          internalPath = '/our-services/trucking';
        } else if (href.includes('/our-services/air-freight')) {
          internalPath = '/our-services/air-freight';
        } else if (href.includes('/international-small-parcel-shipping')) {
          internalPath = '/international-small-parcel-shipping';
        } else if (href.includes('/our-services/ocean-freight/fcl-services')) {
          internalPath = '/our-services/ocean-freight/fcl-services';
        } else if (href.includes('/our-services/ocean-freight/lcl-shipping')) {
          internalPath = '/our-services/ocean-freight/lcl-shipping';
        } else if (href.includes('/our-services/ocean-freight')) {
          internalPath = '/our-services/ocean-freight';
        } else if (href.includes('/our-services/amazon-fba')) {
          internalPath = '/our-services/amazon-fba';
        } else if (href.includes('/cargo-insurance')) {
          internalPath = '/cargo-insurance';
        } else if (href.includes('/how-to-ship-guide')) {
          internalPath = '/how-to-ship-guide';
        } else if (href.includes('/about-us/how-to-ship-videos')) {
          internalPath = '/how-to-ship-videos';
        } else if (href.includes('/how-to-ship')) {
          internalPath = '/how-to-ship';
        } else if (href === '/' || href.startsWith('/#')) {
          internalPath = href;
        }
      }
      // Handle full URLs
      else if (href.includes('exfreight.com')) {
        if (href.includes('/our-services/trucking/ltl-freight')) {
          internalPath = '/our-services/trucking/ltl-freight';
        } else if (href.includes('/our-services/trucking/ftltrucking') || href.includes('/our-services/trucking/ftl-trucking')) {
          internalPath = '/our-services/trucking/ftl-trucking';
        } else if (href.includes('/our-services/trucking')) {
          internalPath = '/our-services/trucking';
        } else if (href.includes('/our-services/air-freight')) {
          internalPath = '/our-services/air-freight';
        } else if (href.includes('/international-small-parcel-shipping')) {
          internalPath = '/international-small-parcel-shipping';
        } else if (href.includes('/our-services/ocean-freight/fcl-services')) {
          internalPath = '/our-services/ocean-freight/fcl-services';
        } else if (href.includes('/our-services/ocean-freight/lcl-shipping')) {
          internalPath = '/our-services/ocean-freight/lcl-shipping';
        } else if (href.includes('/our-services/ocean-freight')) {
          internalPath = '/our-services/ocean-freight';
        } else if (href.includes('/our-services/amazon-fba')) {
          internalPath = '/our-services/amazon-fba';
        } else if (href.includes('/cargo-insurance')) {
          internalPath = '/cargo-insurance';
        } else if (href.includes('/how-to-ship-guide')) {
          internalPath = '/how-to-ship-guide';
        } else if (href.includes('/about-us/how-to-ship-videos')) {
          internalPath = '/how-to-ship-videos';
        } else if (href.includes('/how-to-ship')) {
          internalPath = '/how-to-ship';
        }
      }

      if (internalPath && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        const clickHandler = (e: Event) => {
          e.preventDefault();
          if (href.startsWith('#')) {
            // Handle anchor links
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            navigate(internalPath);
          }
        };
        link.addEventListener('click', clickHandler);
        link.style.cursor = 'pointer';
        clickHandlers.push({ element: link, handler: clickHandler });
      }
    });
    
    // Cleanup function
    return () => {
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler);
      });
    };

    // Process images to use absolute URLs if needed
    const images = containerRef.current.querySelectorAll('img[src]');
    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src && src.startsWith('/') && !src.startsWith('//')) {
        // Convert relative image paths to absolute
        img.setAttribute('src', `https://www.exfreight.com${src}`);
      }
    });
  }, [html, navigate]);

  return (
    <div
      ref={containerRef}
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

