"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/navbar';
import { app } from '@/firebase.config';
import { getAnalytics } from 'firebase/analytics';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    getAnalytics(app);
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('6Ld5SmQpAAAAAISeSp0hZUiAQZPBgVKDlIDR1Jtz'),
  
      // Optional argument. If true, the SDK automatically refreshes App Check
      // tokens as needed.
      isTokenAutoRefreshEnabled: true
    });
  })
  
  return (
    <html lang="en">
      <title>Ausztriában magyarul</title>
      <meta 
        name="Ausztriában magyarul - Tolmácsolás, fordítás, nyelvi segítség ügyintézéshez"
        content="Ausztriában magyarul - Tolmácsolás, fordítás, nyelvi segítség ügyintézéshez"      
      />
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}  
      </body>
    </html>
  );
}
