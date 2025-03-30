import { Rating, Typography } from '@mui/material';
import { PieValueType } from '@mui/x-charts';

import type { FundData } from '@/types';

import { PortfolioAssetChart } from '../PortfolioAssetChart';
import { RiskMeter } from '../RiskMeter';

export type Props = Pick<FundData, 'quote' | 'profile' | 'ratings'> & {
  asset: PieValueType[];
};

export function AssetAllocationRating({ quote, profile, ratings, asset }: Props) {
  const { name } = quote;
  const { analystRating, analystRatingLabel, SRRI } = ratings;

  console.log({ profile }); // TODO

  return (
    <>
      <Typography variant="h3">{name}</Typography>

      <PortfolioAssetChart data={asset} />

      <RiskMeter value={SRRI} />

      <Typography variant="body1">{analystRatingLabel}</Typography>
      <Rating name="rating" defaultValue={analystRating} readOnly />
    </>
  );
}
