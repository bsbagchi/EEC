'use client';

import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  pageType?: 'website' | 'article' | 'product';
  imageUrl?: string;
  keywords?: string[];
}

const SEO = ({
  title,
  description,
  canonical,
  pageType = 'website',
  imageUrl = '/images/logo.png',
  keywords = [],
}: SEOProps) => {
  const siteUrl = 'https://cgcarbon.in';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <>
      <Head>
        {/* Additional meta tags not covered by NextSeo */}
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={fullCanonical}
        openGraph={{
          url: fullCanonical,
          title: title,
          description: description,
          images: [
            {
              url: imageUrl.startsWith('http') ? imageUrl : `${siteUrl}${imageUrl}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          siteName: 'CG Carbon',
          type: pageType,
        }}
        twitter={{
          handle: '@cgcarbon',
          site: '@cgcarbon',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'CG Carbon',
          },
          {
            name: 'application-name',
            content: 'CG Carbon',
          }
        ]}
      />
    </>
  );
};

export default SEO;
