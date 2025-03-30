'use client';

import { Alert, Box, CircularProgress, Paper, Rating, Typography } from '@mui/material';

import { PortfolioAssetChart } from '@/components/PortfolioAssetChart';
import { FundData } from '@/types';

export type Props = {
  data: FundData;
  isLoading: boolean;
  error: Error | null;
};

export function FundDisplay({ data, isLoading, error }: Props) {
  const {
    quote: { name, sectorName, marketCode, lastPrice, ongoingCharge, currency } = {},
    profile: { objective } = {},
    ratings: { analystRating, SRRI, analystRatingLabel } = {},
    documents,
    portfolio: { asset, top10Holdings } = {},
  } = data ?? {};

  if (isLoading) {
    return (
      <Paper sx={{ p: 3, mt: 3 }}>
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper sx={{ p: 3, mt: 3 }}>
        <Alert severity="error">Error loading fund data: {error.message}</Alert>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      {name && (
        <Typography variant="h3" gutterBottom>
          {name}
        </Typography>
      )}

      {asset && <PortfolioAssetChart data={asset} />}

      {analystRating && <Rating name="rating" defaultValue={analystRating} readOnly />}

      <Box>{data && <Typography variant="body1">{JSON.stringify(data, null, 2)}</Typography>}</Box>
    </Paper>
  );
}
