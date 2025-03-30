'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';

import { ALL_FUND_IDS } from '@/constants';
import { getFundData } from '@/queries';

import { PortfolioAssetChart } from './PortfolioAssetChart';

export function InvestmentData() {
  const fundId = ALL_FUND_IDS[0];

  const { data, isLoading, error } = useQuery({
    queryKey: ['fundId'],
    queryFn: () => getFundData(fundId!),
    enabled: !!fundId,
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !data || 'error' in data) {
    return (
      <Box>
        <Alert severity="error">Error loading fund data: {error.message}</Alert>
      </Box>
    );
  }

  const { portfolio } = data;

  return (
    <>
      <PortfolioAssetChart data={portfolio?.asset} />
    </>
  );
}
