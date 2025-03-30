import { Grid, Rating, Typography } from '@mui/material';
import { PieValueType } from '@mui/x-charts';

import type { FundData } from '@/types';

import { PortfolioAssetChart } from '../PortfolioAssetChart';
import { RiskMeter } from '../RiskMeter';
import styles from './styles.module.css';

export type Props = Pick<FundData, 'quote' | 'profile' | 'ratings'> & {
  asset: PieValueType[];
};

export function AssetAllocationRating({ quote, profile, ratings, asset }: Props) {
  const { name } = quote;
  const { objective } = profile;
  const { analystRating, analystRatingLabel, SRRI } = ratings;

  return (
    <>
      <Typography variant="h3">{name}</Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body1">{objective}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} className={styles['star-rating']}>
          <Typography variant="body1">{analystRatingLabel}</Typography>
          <Rating name="rating" defaultValue={analystRating} readOnly />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">Fund asset allocation</Typography>
          <PortfolioAssetChart data={asset} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">Fund rating</Typography>
          <RiskMeter value={SRRI} />
        </Grid>
      </Grid>
    </>
  );
}
