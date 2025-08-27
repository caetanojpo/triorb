import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700', '800'], // Thin, Regular, Bold, ExtraBold
  variable: '--font-poppins',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
