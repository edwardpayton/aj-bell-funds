export const formatCurrency = (number: number, currency: string) => {
  const _number = currency === 'GBX' ? number / 100 : number;

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(_number);
};
