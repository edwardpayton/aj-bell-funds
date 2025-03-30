import type { FundData } from '@/types';

export type FundResponse = FundData | { error: unknown };

export async function getFundData(id: string): Promise<FundResponse> {
  try {
    const response = await fetch(`/api/getData/${id}`);
    return response.json();
  } catch (error) {
    return { error };
  }
}
