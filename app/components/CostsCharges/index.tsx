import { Typography } from '@mui/material';

import { FundData } from '@/types';
import { formatCurrency } from '@/utils/format-currency';

export type Props = Pick<FundData['quote'], 'ongoingCharge'>;

export function CostsCharges({ ongoingCharge }: Props) {
  const formattedCurrency = formatCurrency(ongoingCharge, 'GBP');

  return (
    <>
      <Typography variant="h3">Ongoing charge</Typography>
      <Typography variant="body1">{formattedCurrency}</Typography>
    </>
  );
}
