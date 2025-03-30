import type { NextRequest } from 'next/server';

import { GET } from '@/api/getData/[id]/route';
import { BASE_URL } from '@/constants';

global.fetch = jest.fn();

global.Response = {
  json: (data: any) => Promise.resolve({ json: () => data }),
} as any;

const mockRequest = {} as NextRequest;
const mockFundId = 'fund123';
const mockParams = {
  params: {
    id: mockFundId,
  },
};

describe('GET route handler', () => {
  beforeEach(() => jest.clearAllMocks());

  it('fetches and return data for a given fund ID', async () => {
    const mockData = { someKey: 'someValue' };
    const mockResponse = { data: mockData };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    const response = await GET(mockRequest, mockParams);
    const result = await response.json();

    expect(global.fetch).toHaveBeenNthCalledWith(1, `${BASE_URL}${mockFundId}.json`);
    expect(result).toEqual(mockData);
  });

  it('handles fetch errors appropriately', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    await expect(GET(mockRequest, mockParams)).rejects.toThrow('Fetch failed');
  });
});
