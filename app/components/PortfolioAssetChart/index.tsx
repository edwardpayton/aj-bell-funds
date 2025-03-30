import { type PieValueType } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';

import styles from './styles.module.css';

export type Props = {
  data: PieValueType[];
};

export function PortfolioAssetChart({ data }: Props) {
  return (
    <PieChart
      series={[
        {
          data: data.map(({ label, value }) => ({
            value,
            label: `${label}: ${value.toFixed(2)}`,
          })),
        },
      ]}
      width={500}
      height={500}
      className={styles.root}
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: {
            bottom: -20,
          },
        },
      }}
    />
  );
}
