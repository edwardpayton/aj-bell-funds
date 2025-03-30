import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';

import RootLayout, { type Props } from '@/layout';
import { QueryProvider } from '@/providers/QueryProvider';

jest.mock('next/font/google', () => ({
  Source_Sans_3: () => ({
    variable: 'mocked-font-class',
  }),
}));

jest.mock('../theme', () => ({
  __esModule: true,
  default: {
    typography: {
      fontFamily: 'var(--font-source-sans-3)',
    },
  },
}));

jest.mock('@mui/material-nextjs/v15-appRouter', () => ({
  AppRouterCacheProvider: jest.fn(),
}));

jest.mock('@mui/material/styles', () => ({
  ThemeProvider: jest.fn(),
}));

jest.mock('../providers/QueryProvider', () => ({
  QueryProvider: jest.fn(),
}));

const mockChildren = <p>test children</p>;
const mockWrapper = ({ children }: Props) => <div>{children}</div>;

const setup = () => {
  (AppRouterCacheProvider as jest.Mock).mockImplementation(mockWrapper);
  (ThemeProvider as jest.Mock).mockImplementation(mockWrapper);
  (QueryProvider as jest.Mock).mockImplementation(mockWrapper);

  return render(<RootLayout>{mockChildren}</RootLayout>);
};

describe('RootLayout', () => {
  it('renders children', () => {
    const { getByText } = setup();

    expect(getByText('test children')).toBeInTheDocument();
  });
});
