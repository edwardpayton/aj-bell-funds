import { type NextRequest } from 'next/server';

import { BASE_URL } from '@/constants';
import { FundId } from '@/types';

type Params = {
  params: {
    id: FundId;
  };
};

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const response = await fetch(`${BASE_URL}${id}.json`);
  const { data } = await response.json();
  return Response.json(data);
}
