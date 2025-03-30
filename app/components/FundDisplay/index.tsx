'use client';

import { Alert, Box, CircularProgress, Paper, Tab, Tabs } from '@mui/material';
import { parseAsInteger, useQueryState } from 'nuqs';
import { type SyntheticEvent } from 'react';

import { FUND_DISPLAY_TABS } from '@/constants';
import type { FundData } from '@/types';

import { AssetAllocationRating } from '../AssetAllocationRating';
import { CostsCharges } from '../CostsCharges';
import { Documents } from '../Documents';
import { FundHoldings } from '../FundHoldings';
import styles from './styles.module.css';

export type Props = {
  data: FundData;
  isLoading: boolean;
  error: Error | null;
};

export function FundDisplay({ data, isLoading, error }: Props) {
  const [activeTab, setActiveTab] = useQueryState('tab-number', parseAsInteger.withDefault(0));

  const { quote, profile, ratings, documents, portfolio } = data ?? {};

  const { asset, top10Holdings } = portfolio ?? {};
  const { ongoingCharge } = quote ?? {};

  const hasEssentialData = data && !!Object.keys(quote).length && !!Object.keys(asset).length;

  const renderTabContent = (index: number) => {
    switch (index) {
      case 3:
        return <Documents documents={documents} />;
      case 2:
        return <CostsCharges ongoingCharge={ongoingCharge} />;
      case 1:
        return <FundHoldings top10Holdings={top10Holdings} />;
      case 0:
      default:
        return (
          <AssetAllocationRating quote={quote} profile={profile} ratings={ratings} asset={asset} />
        );
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
          <Tabs
            value={activeTab}
            onChange={handleChange}
            aria-label="fund tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
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
              className={styles.panel}
            >
              <Box className={styles['panel-inner']}>{renderTabContent(i)}</Box>
            </Box>
          ))}
        </>
      )}
    </Paper>
  );
}
