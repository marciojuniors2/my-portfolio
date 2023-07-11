"use client"
import { ThemeProvider } from 'styled-components';
import { Inter } from 'next/font/google'
import theme from '@/styles/theme';
import GlobalStyles from '../styles/globals';
import Head from 'next/head';

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&family=Montserrat:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"
            />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>{children}</body>
      </html>
      <GlobalStyles />
    </ThemeProvider>
  );
}
