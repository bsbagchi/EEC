'use client';

import React from 'react';
import Head from 'next/head';

interface OrganizationSchemaProps {
  name?: string;
  logo?: string;
  url?: string;
  description?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}

export const OrganizationSchema = ({
  name = 'CG Carbon',
  logo = 'https://cgcarbon.in/images/logo.png',
  url = 'https://cgcarbon.in',
  description = 'CG Carbon provides high-quality activated carbon products for water treatment, air purification, industrial applications and more, derived from sustainable sources.',
  telephone = '+91 94818 73543',
  address = {
    streetAddress: 'SadaShivnagar',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '535022',
    addressCountry: 'IN'
  },
  sameAs = [
    'https://www.facebook.com/cgcarbon',
    'https://www.instagram.com/cgcarbon',
    'https://twitter.com/cgcarbon',
    'https://www.linkedin.com/company/cgcarbon'
  ]
}: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    description,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    sameAs
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

interface ProductSchemaProps {
  name: string;
  image: string;
  description: string;
  brand?: string;
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
  };
  url?: string;
}

export const ProductSchema = ({
  name,
  image,
  description,
  brand = 'CG Carbon',
  url = 'https://cgcarbon.in',
  offers = {
    availability: 'https://schema.org/InStock'
  }
}: ProductSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    description,
    brand: {
      '@type': 'Brand',
      name: brand
    },
    offers: {
      '@type': 'Offer',
      ...offers,
      url
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    item?: string;
  }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item || undefined
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};
