import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
}) => {
  useEffect(() => {
    const fullTitle = title.includes('VIQ Systems') ? title : `${title} | VIQ Systems`;
    document.title = fullTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
      }
    }

    const effectiveOgTitle = ogTitle || fullTitle;
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle) {
      metaOgTitle.setAttribute('content', effectiveOgTitle);
    }

    const effectiveOgDesc = ogDescription || description;
    if (effectiveOgDesc) {
      let metaOgDesc = document.querySelector('meta[property="og:description"]');
      if (metaOgDesc) {
        metaOgDesc.setAttribute('content', effectiveOgDesc);
      }
    }
  }, [title, description, ogTitle, ogDescription]);

  return null;
};

export default SEO;
