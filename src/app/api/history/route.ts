import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import mongodb from '@/lib/mongo-db';
import { OST_COLLECTION } from '@/constants';
import { PledgeClassMember } from '@/types';

interface HistoryGetResponse {
  pledgeClass?: string,
  president?: string,
  pledgeMom?: string,
  year?: string,
  members?: PledgeClassMember[]
}

interface QueryFilter {
  year?: string | { $gte: string, $lte: string };
}

interface ProjectionFilter {
  projection: {
    _id: number;
    [key: string]: number
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request?.nextUrl?.searchParams;
  const range = searchParams.get('range');
  const type = searchParams.get('type');

  const queryFilter: QueryFilter = {};

  if (range?.includes('s')) {
    queryFilter.year = {
      $gte: range.slice(0,4),
      $lte: `${range.slice(0,3)}9`
    }
  } else if (range) {
    queryFilter.year = range;
  }

  const projectionFilter: ProjectionFilter = {
    projection: {
      _id: 0
    }
  };

  if (type) {
    projectionFilter.projection[type] = 1;
  }


  console.log('>>>>>>>>>>>>>>>>>>>>> api-history: search params', {
    range,
    type,
    queryFilter,
    projectionFilter
  });


  try {
    const database = await mongodb();

    const response: HistoryGetResponse[] = await database
      .collection(OST_COLLECTION)
      .find(queryFilter, projectionFilter)
      .sort({
        year: 1
      })
      .toArray();

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> api-history: mongodb response', response);

    return NextResponse.json(response);
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', `error connectiong with mongo DB, ${err}`);
    return NextResponse.json({
      error: err,
      status: 500
    });
  }
}
