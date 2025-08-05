import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TRIORB – Visualize o futuro da construção',
  description:
    'Descubra soluções inovadoras para a construção civil com a TRIORB: projetos em 3D, planejamento inteligente e controle completo de obras.',
  keywords: [
    'construção civil',
    'planejamento 3D',
    'projetos inteligentes',
    'visualização de obras',
    'tecnologia na construção',
    'TRIORB',
  ],
  authors: [{ name: 'T_YOU Tecnologia', url: 'https://www.instagram.com/tyoutecnologia' }],
  creator: 'T_YOU Tecnologia',
  publisher: 'T_YOU Tecnologia',
  openGraph: {
    title: 'TRIORB – Visualize o futuro da construção',
    description:
      'Descubra soluções inovadoras para a construção civil com a TRIORB: projetos em 3D, planejamento inteligente e controle completo de obras.',
    url: 'https://www.triorb.com',
    siteName: 'TRIORB',
    images: [
      {
        url: 'https://www.triorb.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TRIORB – Visualização 3D de obras',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRIORB – Visualize o futuro da construção',
    description:
      'Soluções inovadoras para a construção civil: projetos 3D, planejamento inteligente e controle de obras.',
    site: '@triorb',
    creator: '@tyoutecnologia',
    images: ['https://www.triorb.com/twitter-card.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
