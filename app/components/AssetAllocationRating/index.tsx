import { Rating, Typography } from '@mui/material';

import type { FundData } from '@/types';

import { PortfolioAssetChart } from '../PortfolioAssetChart';

export type Props = Pick<FundData, 'quote' | 'profile' | 'ratings' | 'portfolio'>;

export function AssetAllocationRating({ quote, profile, ratings, portfolio }: Props) {
  const { name } = quote;

  const { asset } = portfolio;

  const { analystRating, analystRatingLabel } = ratings;

  console.log({ profile });

  return (
    <>
      <Typography variant="h3">{name}</Typography>

      <PortfolioAssetChart data={asset} />

      <Typography variant="body1">{analystRatingLabel}</Typography>
      <Rating name="rating" defaultValue={analystRating} readOnly />
    </>
  );
}
