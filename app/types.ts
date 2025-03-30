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
    asset: Record<string, string>[];
    top10Holdings: unknown[];
  };
};
