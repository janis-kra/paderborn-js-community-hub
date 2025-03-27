import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
  structuredData?: Record<string, unknown>;
};

const defaultImage = '/images/og-image.jpg';
const defaultDescription = 'PaderbornJS is a community of JavaScript enthusiasts, developers, and learners in Paderborn, Germany. Join us to learn, share, and connect.';
const siteName = 'PaderbornJS Community';
const twitterHandle = '@PaderbornJS';
const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PaderbornJS',
  url: 'https://paderbornjs.org',
  logo: 'https://paderbornjs.org/images/logo.png',
  sameAs: [
    'https://github.com/paderbornjs',
    'https://meetup.com/paderbornjs',
    'https://linkedin.com/company/paderbornjs'
  ],
  description: defaultDescription
};

const SEOHead = ({
  title,
  description = defaultDescription,
  canonical,
  image = defaultImage,
  type = 'website',
  publishedAt,
  updatedAt,
  author,
  structuredData,
}: SEOProps) => {
  // Prepare the full title
  const fullTitle = title ? `${title} | PaderbornJS` : 'PaderbornJS - JavaScript Community in Paderborn';
  
  // Prepare structured data
  const schema = structuredData || defaultStructuredData;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph meta tags for social sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEOHead; 