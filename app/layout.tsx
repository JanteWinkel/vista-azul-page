import Provider from './provider';
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vista Azul",
  description: "Aplicación de Vista Azul",
};

export default function RootLayout({children}: { children: React.ReactNode } ) {

  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
