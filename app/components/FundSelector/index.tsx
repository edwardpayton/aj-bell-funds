'use client';

import {
  Box,
  FormControl,
  FormLabel,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { type MouseEvent, useId } from 'react';

import { FUND_TYPES, GROWTH_FUND_OPTIONS } from '@/constants';
import type { FundType } from '@/types';

import styles from './styles.module.css';

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
  const headingId = useId();
  const fundTypeId = useId();
  const growthTypeId = useId();

  return (
    <Paper
      component="section"
      aria-labelledby={headingId}
      className={`component-root ${styles.root}`}
    >
      <Box className={styles.box}>
        <Typography variant="h2" id={headingId}>
          1. Tell us why you're investing
        </Typography>

        <FormControl component="fieldset">
          {/* Fund Type Options */}
          <FormLabel component="legend" id={fundTypeId} className={styles.label}>
            Select Fund Type
          </FormLabel>

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
        </FormControl>
      </Box>

      {/* Growth Funds Options */}
      {fundType === 'Growth' && (
        <Box className={styles.box}>
          <Typography variant="h3">2. Choose your fund</Typography>

          <FormControl component="fieldset">
            <FormLabel component="legend" id={growthTypeId} className={styles.label}>
              Select Growth Fund
            </FormLabel>

            <ToggleButtonGroup
              color="primary"
              value={growthFundId}
              exclusive
              onChange={onChangeGrowthFundAction}
              aria-labelledby={growthTypeId}
            >
              {GROWTH_FUND_OPTIONS.map(
                ({ label, id }) =>
                  id && (
                    <ToggleButton key={label} value={id}>
                      {label}
                    </ToggleButton>
                  ),
              )}
            </ToggleButtonGroup>
          </FormControl>
        </Box>
      )}
    </Paper>
  );
}
