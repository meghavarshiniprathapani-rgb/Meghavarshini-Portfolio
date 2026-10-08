import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Satya Meghavarshini Prathapani',
  description: 'Portfolio of Satya Meghavarshini Prathapani.',
};

export const viewport: Viewport = { themeColor: '#f4f2ee' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
