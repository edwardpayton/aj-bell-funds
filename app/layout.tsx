import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';
import { QueryProvider } from './providers/QueryProvider';
import theme from './theme';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

export const metadata: Metadata = {
  title: 'AJ Bell Funds',
  description: 'Front-end Engineering: Practical assessment - Ed Payton, March 2025',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <QueryProvider>
            <body className={sourceSans3.variable}>{children}</body>
          </QueryProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
