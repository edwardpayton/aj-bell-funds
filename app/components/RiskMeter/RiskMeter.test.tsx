import { render, screen } from '@testing-library/react';

import { type Props, RiskMeter } from '@/components/RiskMeter';

const setup = (props?: Props) => {
  render(<RiskMeter value={5} {...props} />);
};

describe('RiskMeter', () => {
  it('renders the risk rating and text', () => {
    setup();

    expect(
      screen.getByRole('heading', { level: 6, name: 'Risk Rating: 5/10' }),
    ).toBeInTheDocument();

    expect(screen.getByText('Lower risk')).toBeInTheDocument();
    expect(screen.getByText('Higher risk')).toBeInTheDocument();
  });

  it('does not render if there is no value', () => {
    setup({ value: null as unknown as number });

    expect(
      screen.queryByRole('heading', { level: 6, name: 'Risk Rating: 5/10' }),
    ).not.toBeInTheDocument();
  });
});
