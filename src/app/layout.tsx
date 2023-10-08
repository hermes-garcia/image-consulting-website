import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const florentino = localFont({
  src: '../fonts/florentino-regular.woff2',
  variable: '--font-florentino',
});
const muse = localFont({
  src: '../fonts/muse-regular.woff2',
  variable: '--font-muse',
});

export const metadata: Metadata = {
  title: 'Aury Peregrino',
  description: 'Consultoría de Imagen, Colorimetría y Personal Shopper',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-mx">
      <body className={`${florentino.variable} ${muse.variable} sans`}>{children}</body>
    </html>
  );
}
