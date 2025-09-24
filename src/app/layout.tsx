import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Quarilabs",
  description: "Quari Labs",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/assets/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter bg-background text-foreground antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
