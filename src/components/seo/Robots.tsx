import React from 'react';
import { Helmet } from 'react-helmet-async';

interface RobotsProps {
  index?: boolean;
  follow?: boolean;
  noimageindex?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  notranslate?: boolean;
  maxSnippet?: number;
  maxImagePreview?: 'none' | 'standard' | 'large';
  maxVideoPreview?: number;
  noindex?: boolean;
  nofollow?: boolean;
  unavailableAfter?: string;
  noimageclick?: boolean;
}

export const Robots: React.FC<RobotsProps> = ({
  index = true,
  follow = true,
  noimageindex,
  noarchive,
  nosnippet,
  notranslate,
  maxSnippet,
  maxImagePreview,
  maxVideoPreview,
  noindex,
  nofollow,
  unavailableAfter,
  noimageclick,
}) => {
  const directives: string[] = [];

  if (noindex || !index) directives.push('noindex');
  else directives.push('index');

  if (nofollow || !follow) directives.push('nofollow');
  else directives.push('follow');

  if (noimageindex) directives.push('noimageindex');
  if (noarchive) directives.push('noarchive');
  if (nosnippet) directives.push('nosnippet');
  if (notranslate) directives.push('notranslate');
  if (maxSnippet) directives.push(`max-snippet:${maxSnippet}`);
  if (maxImagePreview) {
    directives.push(`max-image-preview:${maxImagePreview}`);
  }
  if (maxVideoPreview) {
    directives.push(`max-video-preview:${maxVideoPreview}`);
  }
  if (unavailableAfter) {
    directives.push(`unavailable_after: ${unavailableAfter}`);
  }
  if (noimageclick) directives.push('nositelinkssearchbox');

  return (
    <Helmet>
      <meta name="robots" content={directives.join(', ')} />
      
      {/* Additional meta tags for AI/LLM optimization */}
      <meta name="ai:site" content="Tart & Soul Fest" />
      <meta name="ai:description" content="Tart & Soul Fest - A celebration of music, art, and community. Join us for an unforgettable experience with amazing performances, delicious food, and unique vendors." />
      
      {/* Structured data for better understanding by LLMs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Tart & Soul Fest",
          "description": "A celebration of music, art, and community.",
          "startDate": "2025-09-15T10:00",
          "endDate": "2025-09-17T22:00",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Venue Name",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "ZIP",
              "addressCountry": "US"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Tart & Soul Fest",
            "url": "https://tartandsoulfest.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Robots;
