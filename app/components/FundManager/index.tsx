'use client';

import { useQuery } from '@tanstack/react-query';
import { type MouseEvent, useState } from 'react';

import { FundDisplay } from '@/components/FundDisplay';
import { FundSelector } from '@/components/FundSelector';
import { FUNDS } from '@/constants';
import { getFundData } from '@/queries';
import type { FundData, FundId, FundType } from '@/types';

export function FundManager() {
  const [fundType, setFundType] = useState<FundType | null>(null);
  const [growthFundId, setGrowthFundId] = useState<FundId | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: [growthFundId],
    queryFn: () => getFundData(growthFundId!),
    enabled: !!growthFundId,
  });

  const handleChangeFundType = (_: MouseEvent<HTMLElement>, value: FundType | null) => {
    if (!value || value === fundType) return;

    setFundType(value);
    setGrowthFundId(value === 'Responsible' ? FUNDS.Responsible.Default : null);
  };

  const handleChangeGrowthFundType = (_: MouseEvent<HTMLElement>, value: FundId | null) => {
    setGrowthFundId(value);
  };

  return (
    <>
      <FundSelector
        fundType={fundType}
        growthFundId={growthFundId}
        onChangeFundTypeAction={handleChangeFundType}
        onChangeGrowthFundAction={handleChangeGrowthFundType}
      />

      <FundDisplay isLoading={isLoading} error={error} data={data as FundData} />
    </>
  );
}
