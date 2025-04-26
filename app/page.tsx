import React from 'react';
import { Metadata } from 'next';
import Homepage from './components/Home/Homepage';
import { OrganizationSchema } from './components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'CG Carbon | Premium Activated Carbon Solutions',
  description: 'CG Carbon provides high-quality activated carbon products for water treatment, air purification, industrial applications and more, derived from sustainable sources.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CG Carbon | Premium Activated Carbon Solutions',
    description: 'CG Carbon provides high-quality activated carbon products for water treatment, air purification, industrial applications and more, derived from sustainable sources.',
    url: 'https://cgcarbon.in',
    siteName: 'CG Carbon',
    images: [
      {
        url: 'https://cgcarbon.in/images/logo.png',
        width: 800,
        height: 600,
        alt: 'CG Carbon Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <Homepage />
    </>
  );
}
