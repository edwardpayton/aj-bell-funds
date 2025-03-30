'use client';

import { Alert, Box, CircularProgress, Paper, Tab, Tabs, Typography } from '@mui/material';
import { type SyntheticEvent, useState } from 'react';

import { FUND_DISPLAY_TABS } from '@/constants';
import type { FundData } from '@/types';

import { AssetAllocationRating } from '../AssetAllocationRating';

export type Props = {
  data: FundData;
  isLoading: boolean;
  error: Error | null;
};

export function FundDisplay({ data, isLoading, error }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { quote, profile, ratings, documents, portfolio } = data ?? {};

  const hasEssentialData = data && !!Object.keys(quote).length;

  const renderTabContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <AssetAllocationRating
            quote={quote}
            profile={profile}
            ratings={ratings}
            portfolio={portfolio}
          />
        );
      case 1:
        return <p>2</p>;
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
            {FUND_DISPLAY_TABS.map(({ label, id }) => (
              <Tab key={`tab-${id}`} label={label} id={`tab-${id}`} aria-controls={`panel-${id}`} />
            ))}
          </Tabs>

          {FUND_DISPLAY_TABS.map(({ label, id }, i) => (
            <Box
              key={`panel-${id}`}
              component="section"
              role="tabpanel"
              id={`panel-${id}`}
              hidden={activeTab !== i}
              aria-label={`${label} tab`}
            >
              {renderTabContent(i)}
            </Box>
          ))}
        </>
      )}
      <Box>{data && <Typography variant="body1">{JSON.stringify(data, null, 2)}</Typography>}</Box>
    </Paper>
  );
}
