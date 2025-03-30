import { Typography } from '@mui/material';

import { FundData } from '@/types';

export type Props = Pick<FundData['quote'], 'ongoingCharge' | 'currency'>;

export function CostsCharges({ ongoingCharge, currency }: Props) {
  const formattedCurrency = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
  }).format(ongoingCharge);

  return (
    <>
      <Typography variant="h3">Ongoing charge</Typography>
      <Typography variant="body1">{formattedCurrency}</Typography>
    </>
  );
}
