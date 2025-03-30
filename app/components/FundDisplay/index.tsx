'use client';

import { Alert, Box, CircularProgress, Paper, Rating, Typography } from '@mui/material';

import { PortfolioAssetChart } from '@/components/PortfolioAssetChart';
import type { FundData } from '@/types';

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

  const hasEssentialData = !!name && !!asset && !!analystRating;

  return (
    <Paper className="component-root">
      {isLoading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error">Error loading fund data: {error.message}</Alert>}

      {hasEssentialData && (
        <>
          <Typography variant="h3">{name}</Typography>

          <PortfolioAssetChart data={asset} />

          <Rating name="rating" defaultValue={analystRating} readOnly />
        </>
      )}

      <Box>{data && <Typography variant="body1">{JSON.stringify(data, null, 2)}</Typography>}</Box>
    </Paper>
  );
}
