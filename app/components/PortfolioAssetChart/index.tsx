import { type PieValueType } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';

export type Props = {
  data: PieValueType[];
};

export function PortfolioAssetChart({ data }: Props) {
  return (
    <PieChart
      series={[{ data }]}
      width={500}
      height={500}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}
