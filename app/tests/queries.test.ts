import { GROWTH_FUND_IDS } from '@/constants';
import { FundResponse, getFundData } from '@/queries';

const testFundId = GROWTH_FUND_IDS[0];

const mockData = { someKey: 'someValue' };
const mockError = new Error('Fetch failed');

const mockFetchResolve = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: mockData }),
  } as unknown as FundResponse),
);
const mockFetchReject = jest.fn(() => Promise.reject(mockError));

type Options = () => Promise<FundResponse>;

const setup = async (props: string, options: Options) => {
  global.fetch = jest.fn().mockImplementation(options);

  return await getFundData(props);
};

describe('getFundData', () => {
  beforeEach(() => jest.clearAllMocks());

  it('successfully fetches fund data', async () => {
    const result = await setup(testFundId, mockFetchResolve);

    expect(fetch).toHaveBeenNthCalledWith(1, `/api/getData/${testFundId}`);
    expect(result).toEqual({
      data: mockData,
    });
  });

  it('handles fetch errors gracefully', async () => {
    const result = await setup(testFundId, mockFetchReject);

    expect(result).toEqual({ error: mockError });
  });
});
