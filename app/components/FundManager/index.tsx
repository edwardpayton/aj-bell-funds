'use client';

import { useQuery } from '@tanstack/react-query';
import { parseAsInteger, useQueryState } from 'nuqs';
import { type MouseEvent, useEffect, useState } from 'react';

import { FundDisplay } from '@/components/FundDisplay';
import { FundSelector } from '@/components/FundSelector';
import { ALL_FUND_IDS, FUNDS, FUND_TYPES } from '@/constants';
import { getFundData } from '@/queries';
import type { FundData, FundId, FundType } from '@/types';

export function FundManager() {
  const [fundType, setFundType] = useQueryState<FundType>('fundType', {
    parse: (value): FundType => value as FundType,
  });
  const [growthFundId, setGrowthFundId] = useQueryState('growthFundId');
  const [, setTabNumber] = useQueryState('tab-number', parseAsInteger.withDefault(0));

  const [isValidFundId, setIsValidFundId] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: [growthFundId],
    queryFn: () => getFundData(growthFundId!),
    enabled: !!growthFundId && isValidFundId,
  });

  const handleChangeFundType = (_: MouseEvent<HTMLElement>, value: FundType | null) => {
    if (!value || value === fundType) return;

    setFundType(value);
    setGrowthFundId(value === 'Responsible' ? FUNDS.Responsible.Default : null);
    setTabNumber(0);
  };

  const handleChangeGrowthFundType = (_: MouseEvent<HTMLElement>, value: FundId | null) => {
    setGrowthFundId(value);
    setTabNumber(0);
  };

  useEffect(() => {
    // guard calling the api if the url contains an incorrect fundType or growthFundId
    if (fundType && growthFundId) {
      setIsValidFundId(FUND_TYPES.includes(fundType) && ALL_FUND_IDS.includes(growthFundId));
    }
  }, [fundType, growthFundId]);

  return (
    <>
      <FundSelector
        fundType={fundType}
        growthFundId={growthFundId}
        onChangeFundTypeAction={handleChangeFundType}
        onChangeGrowthFundAction={handleChangeGrowthFundType}
      />

      {growthFundId && <FundDisplay isLoading={isLoading} error={error} data={data as FundData} />}
    </>
  );
}
