"use client"
import { ThemeProvider } from 'styled-components';
// import { Inter } from 'next/font/google'
import theme from '@/styles/theme';
import GlobalStyles from '../styles/globals';
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | MarcioJunior'
  },
  icons: [
    {
      url: '/start.png'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>{children}</body>
      </html>
      <GlobalStyles />
    </ThemeProvider>
  );
}
