import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Straico',
    template: '%s | Straico',
  },
  description: "The better Place for IA's",
  creator: 'Straico',
  colorScheme: 'light dark',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: {
      default: 'Straico',
      template: '%s | Straico',
    },
    description: 'The better Place for IA',
    images: [
      {
        url: 'https://straico.com/wp-content/uploads/2023/06/StraicoBot_4x-2048x1365.png',
        width: 800,
        height: 600,
        alt: 'Straico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="bg-snow-100 dark:bg-graphite-800">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
