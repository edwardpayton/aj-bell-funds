import type { PieValueType } from '@mui/x-charts';

export type FundType = 'Growth' | 'Responsible';

export type FundId = string;

export type FundData = {
  quote: {
    name: string;
    sectorName: string;
    marketCode: string;
    lastPrice: number;
    ongoingCharge: number;
    currency: string;
  };
  profile: {
    objective: string;
  };
  ratings: {
    analystRating: number;
    SRRI: number;
    analystRatingLabel: string;
  };
  documents: unknown[];
  portfolio: {
    asset: PieValueType[];
    top10Holdings: unknown[];
  };
};

export type ListOption = {
  id: FundId;
  label: string;
};
