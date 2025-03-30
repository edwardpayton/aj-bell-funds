'use client';

import { Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { type MouseEvent, useId } from 'react';

import { FUND_TYPES, GROWTH_FUND_OPTIONS } from '@/constants';
import type { FundType } from '@/types';

export type Props = {
  onChangeFundTypeAction: (_: MouseEvent<HTMLElement>, value: FundType | null) => void;
  onChangeGrowthFundAction: (_: MouseEvent<HTMLElement>, value: string | null) => void;
  fundType: FundType | null;
  growthFundId: string | null;
};

export function FundSelector({
  fundType,
  growthFundId,
  onChangeFundTypeAction,
  onChangeGrowthFundAction,
}: Props) {
  const fundTypeId = useId();
  const growthTypeId = useId();

  return (
    <Paper className="component-root">
      {/* Fund Type Options */}
      <Typography variant="h2" id={fundTypeId}>
        Select Fund Type
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={fundType}
        exclusive
        onChange={onChangeFundTypeAction}
        aria-labelledby={fundTypeId}
      >
        {FUND_TYPES.map((option) => (
          <ToggleButton key={option} value={option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/* Growth Funds Options */}
      {fundType === 'Growth' && (
        <>
          <Typography variant="h2" id={growthTypeId}>
            Select Growth Fund
          </Typography>

          <ToggleButtonGroup
            color="primary"
            value={growthFundId}
            exclusive
            onChange={onChangeGrowthFundAction}
            aria-labelledby={growthTypeId}
          >
            {GROWTH_FUND_OPTIONS.map(({ name, id }) => (
              <ToggleButton key={name} value={id}>
                {name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </>
      )}
    </Paper>
  );
}
