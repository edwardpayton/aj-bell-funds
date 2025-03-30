'use client';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useQuery } from '@tanstack/react-query';
import { type MouseEvent, useState } from 'react';

import { FUND_TYPES, GROWTH_FUND_OPTIONS } from '@/constants';
import { getFundData } from '@/queries';
import type { FundId, FundType } from '@/types';

import { PortfolioAssetChart } from '../PortfolioAssetChart';

export function FundManager() {
  const [fundType, setFundType] = useState<FundType | null>(null);
  const [growthFundId, setGrowthFundId] = useState<FundId | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: [growthFundId],
    queryFn: () => getFundData(growthFundId!),
    enabled: !!growthFundId,
  });

  const { portfolio } = data ?? {};

  const handleChangeFundType = (_: MouseEvent<HTMLElement>, value: FundType | null) => {
    setFundType(value ?? null);
  };

  const handleChangeGrowthFundType = (_: MouseEvent<HTMLElement>, value: FundId | null) => {
    setGrowthFundId(value);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={fundType}
        exclusive
        onChange={handleChangeFundType}
        aria-label="select fund type"
      >
        {FUND_TYPES.map((option) => (
          <ToggleButton key={option} value={option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {fundType === 'Growth' && (
        <ToggleButtonGroup
          color="primary"
          value={growthFundId}
          exclusive
          onChange={handleChangeGrowthFundType}
          aria-label="select growth fund"
        >
          {GROWTH_FUND_OPTIONS.map(({ name, id }) => (
            <ToggleButton key={name} value={id}>
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}

      {isLoading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box>
          <Alert severity="error">Error loading fund data: {error?.message}</Alert>
        </Box>
      )}

      {data && <PortfolioAssetChart data={portfolio?.asset} />}
    </>
  );
}
