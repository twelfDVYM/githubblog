// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.drakensbergmassage.co.za'), // Replace with your domain
  title: {
    default: 'Next.js GitHub Markdown Blog for DrakensbergMassage.co.za',
    template: '%s | Next.js GitHub Markdown Blog for DrakensbergMassage.co.za',
  },
  description: 'A modern blog platform powered by Next.js and GitHub Markdown, customised for DrakensbergMassage.co.za',
  openGraph: {
    title: 'Next.js GitHub Markdown Blog for DrakensbergMassage.co.za',
    description: 'A modern blog platform powered by Next.js and GitHub Markdown, customised for DrakensbergMassage.co.za',
    url: '/',
    siteName: 'Next.js GitHub Markdown Blog for DrakensbergMassage.co.za',
    images: [
      {
        url: 'https://vee9168.github.io/DBMHost/DBMLogoWeb.png', // Add your own OG image
        width: 1200,
        height: 630,
        alt: 'Drakensberg Massage Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
       {/* <head>
        <GoogleAnalytics gaId="G-YOUR-ID" />
        <Analytics />
      </head> */}
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}

