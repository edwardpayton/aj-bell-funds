export const BASE_URL = 'https://cdn.core3-dev.ajbbuild.uk/interview/';

export const GROWTH_FUNDS = {
  Cautious: 'BYW8RV9',
  Balanced: 'BYW8RX1',
  Adventurous: 'BYW8VG2',
};

export const RESPONSIBLE_FUNDS = {
  Responsible: 'BN0S2V9',
};

export const FUND_TYPES = [...Object.keys(GROWTH_FUNDS), ...Object.keys(RESPONSIBLE_FUNDS)];

export const GROWTH_FUND_IDS = Object.values(GROWTH_FUNDS);

export const ALL_FUND_IDS = [...GROWTH_FUND_IDS, RESPONSIBLE_FUNDS.Responsible];
