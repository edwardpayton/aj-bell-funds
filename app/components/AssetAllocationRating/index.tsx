import { Rating, Typography } from '@mui/material';
import { PieValueType } from '@mui/x-charts';

import type { FundData } from '@/types';

import { PortfolioAssetChart } from '../PortfolioAssetChart';

export type Props = Pick<FundData, 'quote' | 'profile' | 'ratings'> & {
  asset: PieValueType[];
};

export function AssetAllocationRating({ quote, profile, ratings, asset }: Props) {
  const { name } = quote;
  const { analystRating, analystRatingLabel } = ratings;

  console.log({ profile }); // TODO

  return (
    <>
      <Typography variant="h3">{name}</Typography>

      <PortfolioAssetChart data={asset} />

      <Typography variant="body1">{analystRatingLabel}</Typography>
      <Rating name="rating" defaultValue={analystRating} readOnly />
    </>
  );
}
