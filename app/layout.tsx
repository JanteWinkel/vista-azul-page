import Provider from './provider';
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrazas de Vista Azul",
  description: "Aplicación de Vista Azul",
};

export default function RootLayout({children}: { children: React.ReactNode } ) {

  return (
    
      <html lang='en'>
        <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Provider>
          {children}
        </Provider>
        </ThemeProvider>
      </body>
    </html>
   
  );
}
