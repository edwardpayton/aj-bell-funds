import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useId } from 'react';

import { FUND_HOLDINGS_TABS } from '@/constants';
import type { Top10Holding } from '@/types';

import styles from './styles.module.css';

export type Props = {
  top10Holdings: Top10Holding[];
};

export function FundHoldings({ top10Holdings }: Props) {
  const headingId = useId();

  return (
    <>
      <Typography variant="h3" id={headingId}>
        Top 10 holdings
      </Typography>

      <TableContainer component={Paper}>
        <Table aria-labelledby={headingId}>
          <TableHead>
            <TableRow className={styles.row}>
              {FUND_HOLDINGS_TABS.map(({ label }) => (
                <TableCell key={label}>{label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {top10Holdings.map(({ name, weighting }) => (
              <TableRow key={name}>
                <TableCell scope="row">{name}</TableCell>
                <TableCell align="right">{weighting}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
