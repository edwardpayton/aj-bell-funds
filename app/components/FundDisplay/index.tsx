'use client';

import { Alert, Box, CircularProgress, Paper, Tab, Tabs } from '@mui/material';
import { type SyntheticEvent, useState } from 'react';

import { FUND_DISPLAY_TABS } from '@/constants';
import type { FundData } from '@/types';

import { AssetAllocationRating } from '../AssetAllocationRating';
import { FundHoldings } from '../FundHoldings';

export type Props = {
  data: FundData;
  isLoading: boolean;
  error: Error | null;
};

export function FundDisplay({ data, isLoading, error }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { quote, profile, ratings, documents, portfolio } = data ?? {};

  const { asset, top10Holdings } = portfolio ?? {};

  const hasEssentialData = data && !!Object.keys(quote).length && !!Object.keys(asset).length;

  const renderTabContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <AssetAllocationRating quote={quote} profile={profile} ratings={ratings} asset={asset} />
        );
      case 1:
        return <FundHoldings top10Holdings={top10Holdings} />;
      case 2:
        return <p>3</p>;
      case 3:
        return <p>4</p>;
      default:
        return null;
    }
  };

  const handleChange = (_: SyntheticEvent, value: number) => {
    setActiveTab(value);
  };

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
          <Tabs value={activeTab} onChange={handleChange} aria-label="fund tabs">
            {FUND_DISPLAY_TABS.map(({ label }, i) => (
              <Tab key={`tab-${i}`} label={label} id={`tab-${i}`} aria-controls={`panel-${i}`} />
            ))}
          </Tabs>

          {FUND_DISPLAY_TABS.map(({ label }, i) => (
            <Box
              key={`panel-${i}`}
              component="section"
              role="tabpanel"
              id={`panel-${i}`}
              hidden={activeTab !== i}
              aria-label={`${label} tab`}
            >
              {renderTabContent(i)}
            </Box>
          ))}
        </>
      )}
    </Paper>
  );
}
