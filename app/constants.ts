export const BASE_URL = 'https://cdn.core3-dev.ajbbuild.uk/interview/';

export const FUNDS = {
  Growth: {
    Cautious: 'BYW8RV9',
    Balanced: 'BYW8RX1',
    Adventurous: 'BYW8VG2',
  },
  Responsible: {
    Default: 'BN0S2V9',
  },
};

export const FUND_TYPES = [...Object.keys(FUNDS)];

export const GROWTH_FUND_IDS = Object.values(FUNDS.Growth);

export const ALL_FUND_IDS = [...GROWTH_FUND_IDS, FUNDS.Responsible.Default];
