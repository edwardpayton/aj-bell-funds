import { formatCurrency } from './format-currency';

describe('formatCurrency', () => {
  it('formats GBP values correctly', () => {
    expect(formatCurrency(1234.56, 'GBP')).toBe('£1,234.56');
    expect(formatCurrency(0.99, 'GBP')).toBe('£0.99');
    expect(formatCurrency(1000000, 'GBP')).toBe('£1,000,000.00');
  });

  it('formats GBX values correctly by dividing by 100', () => {
    expect(formatCurrency(12345, 'GBX')).toBe('£123.45');
    expect(formatCurrency(99, 'GBX')).toBe('£0.99');
    expect(formatCurrency(100000, 'GBX')).toBe('£1,000.00');
  });

  it('handles zero values', () => {
    expect(formatCurrency(0, 'GBP')).toBe('£0.00');
    expect(formatCurrency(0, 'GBX')).toBe('£0.00');
  });

  it('handles negative values', () => {
    expect(formatCurrency(-1234.56, 'GBP')).toBe('-£1,234.56');
    expect(formatCurrency(-12345, 'GBX')).toBe('-£123.45');
  });
});
