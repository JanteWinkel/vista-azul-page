import Provider from './provider';
import { Bricolage_Grotesque, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz", "wdth"], variable: "--font-display" });
const legible = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-legible" });

export const metadata: Metadata = {
  title: "Terrazas de Vista Azul",
  description: "Aplicación de Vista Azul",
};

export default function RootLayout({children}: { children: React.ReactNode } ) {

  return (
    
      <html lang='es' suppressHydrationWarning>
        <body className={`${display.variable} ${legible.variable} min-h-screen bg-background font-legible antialiased`}>
        <Analytics/>
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
