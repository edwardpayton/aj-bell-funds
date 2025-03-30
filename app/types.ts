import type { PieValueType } from '@mui/x-charts';

export type FundType = 'Growth' | 'Responsible';

export type FundId = string;

export type Top10Holding = {
  name: string;
  weighting: number;
};

export type Documents = {
  id: string;
  type: string;
  url: string;
};

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
  documents: Documents[];
  portfolio: {
    asset: PieValueType[];
    top10Holdings: Top10Holding[];
  };
};

export type ListOption = {
  label: string;
  id?: FundId;
};
