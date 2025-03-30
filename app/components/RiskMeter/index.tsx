import { Box, Typography } from '@mui/material';

import styles from './styles.module.css';

export type Props = {
  value: number;
};

const colors = [
  '#92E3A9', // Light green
  '#A8E892',
  '#BEE87B',
  '#D4E864',
  '#E9E84D',
  '#E8D236',
  '#E8BB1F', // Yellow/Orange
  '#E89B19',
  '#E87A12',
  '#E8590C', // Red
];

export function RiskMeter({ value }: Props) {
  if (!value) return null;

  return (
    <Box component="section" aria-label={`Risk Rating: ${value}/10`}>
      <Box className={styles.headings}>
        <Typography>Lower risk</Typography>
        <Typography>Higher risk</Typography>
      </Box>

      <Box className={styles['ratings-bar']}>
        {colors.map((bgcolor, i) => (
          <Box
            key={bgcolor}
            className={styles.rating}
            sx={{
              bgcolor,
              borderWidth: i === value - 1 ? '2px' : '0px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
