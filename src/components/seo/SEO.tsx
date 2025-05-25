import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
  type?: 'website' | 'article' | 'event' | 'product' | 'profile' | 'book';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tag?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Tart & Soul Fest',
  description = 'A celebration of music, art, and community. Join us for an unforgettable experience with amazing performances, delicious food, and unique vendors.',
  image = '/images/og-image.jpg',
  article = false,
  keywords = ['music festival', 'art', 'community', 'Tart & Soul', 'live music', 'food festival'],
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tag,
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://tartandsoulfest.com';
  const fullUrl = `${siteUrl}${pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Default meta tags
  const defaultTitle = 'Tart & Soul Fest | Music, Art & Community';
  const metaDescription = description || 'A celebration of music, art, and community';
  const metaTitle = title ? `${title} | Tart & Soul Fest` : defaultTitle;

  // Structured data for rich results
  interface WebSiteSchema {
    '@context': string;
    '@type': 'WebSite';
    url: string;
    name: string;
    alternateName: string;
    description: string;
    potentialAction: {
      '@type': 'SearchAction';
      target: string;
      'query-input': string;
    };
  }

  interface ArticleSchema {
    '@context': string;
    '@type': 'Article';
    headline: string;
    description: string;
    image: string;
    url: string;
    datePublished: string;
    dateModified: string;
    author: {
      '@type': 'Person';
      name: string;
    };
    publisher: {
      '@type': 'Organization';
      name: string;
      logo: {
        '@type': 'ImageObject';
        url: string;
      };
    };
    mainEntityOfPage: {
      '@type': 'WebPage';
      '@id': string;
    };
  }

  const schemaOrgJSONLD: (WebSiteSchema | ArticleSchema)[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: 'Tart & Soul Fest',
      alternateName: 'Tart & Soul',
      description: metaDescription,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  if (article) {
    const articleSchema: ArticleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: metaTitle,
      description: metaDescription,
      image: fullImageUrl,
      url: fullUrl,
      datePublished: publishedTime || new Date().toISOString(),
      dateModified: modifiedTime || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: author || 'Tart & Soul Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Tart & Soul Fest',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    };
    schemaOrgJSONLD.push(articleSchema);
  }

  return (
    <Helmet
      title={metaTitle}
      titleTemplate="%s | Tart & Soul Fest"
      defaultTitle={defaultTitle}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      {/* General tags */}
      <meta name="description" content={metaDescription} />
      <meta name="image" content={fullImageUrl} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Tart & Soul Fest" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16" />
      <link rel="icon" type="image/png" href="/logo192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <meta name="theme-color" content="#000000" />

      {/* Additional meta tags for AI/LLM optimization */}
      <meta name="ai:site" content="Tart & Soul Fest" />
      <meta name="ai:description" content={metaDescription} />
      <meta name="ai:keywords" content={keywords.join(', ')} />
      
      {/* Allow indexing of all content */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1, max-snippet:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Allow AI content generation tools */}
      <meta name="ai:allow_crawling" content="true" />
      <meta name="ai:allow_indexing" content="true" />
      <meta name="ai:allow_summarization" content="true" />
      
      {/* Allow translation services */}
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      
      {/* Allow embedding */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tartandsoulfest" />
      <meta name="twitter:creator" content="@tartandsoulfest" />
      
      {/* Additional Open Graph tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Tart & Soul Fest" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={metaTitle} />
      
      {/* For video content */}
      <meta property="og:video" content={`${siteUrl}/videos/promo.mp4`} />
      <meta property="og:video:type" content="video/mp4" />
      <meta property="og:video:width" content="1280" />
      <meta property="og:video:height" content="720" />
      <meta property="og:video:alt" content="Tart & Soul Fest Promo Video" />
      
      {/* For article type */}
      {article && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tag && tag.map((t) => (
            <meta key={t} property="article:tag" content={t} />
          ))}
        </>
      )}
    </Helmet>
  );
};

export default SEO;
