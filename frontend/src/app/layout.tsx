'use client';

import { useState } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from '@/components/nav';
import { isLogged } from '../util/autenticate';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu hamburguer

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        {isLogged && <Nav />}
        <main style={{ margin: '60px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
