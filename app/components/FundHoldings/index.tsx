import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { FUND_HOLDINGS_TABS } from '@/constants';
import type { Top10Holding } from '@/types';

import styles from './styles.module.css';

export type Props = {
  top10Holdings: Top10Holding[];
};

export function FundHoldings({ top10Holdings }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="top 10 holdings table data">
        <TableHead>
          <TableRow className={styles.row}>
            {FUND_HOLDINGS_TABS.map(({ label }) => (
              <TableCell>{label}</TableCell>
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
  );
}
