'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const breakpoints = {
  xs: 0,
  sm: 500,
  md: 800,
  lg: 1200,
  xl: 1536,
} as const;

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  typography: {
    fontFamily: 'var(--font-source-sans-3)',
    fontWeightRegular: 300,
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.2rem',
    },
    h3: {
      fontSize: '2.4rem',
    },
    h4: {
      fontSize: '1.8rem',
    },
    h5: {
      fontSize: '1.4rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg'],
  factor: 2.5,
  variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
});

export default responsiveTheme;
