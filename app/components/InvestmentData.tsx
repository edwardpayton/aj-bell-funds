'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';

import { ALL_FUND_IDS } from '@/constants';
import { FundData, FundId } from '@/types';

export type FundResponse = FundData | { error: unknown };

export async function getFundData(id: FundId): Promise<FundResponse> {
  try {
    const response = await fetch(`/api/getData/${id}`);
    return response.json();
  } catch (error) {
    return { error };
  }
}

export function InvestmentData() {
  const fundId = ALL_FUND_IDS[0];

  const { data, isLoading, error } = useQuery({
    queryKey: ['fundId'],
    queryFn: () => getFundData(fundId!),
    enabled: !!fundId,
  });

  console.log({ data, error });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return <p>Data loaded</p>;
}
