import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '@/page';

// Mock out FundManager because it uses React Query which doesn't need to be covered within this test
jest.mock('@/components/FundManager', () => ({
  FundManager: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders without crashing', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'AJ Bell Fund Selection' }),
    ).toBeInTheDocument();
  });
});
