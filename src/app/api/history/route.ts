import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import mongodb from '@/lib/mongo-db';
import { OST_COLLECTION } from '@/constants';
import { PledgeClassMemberType } from '@/types';

interface HistoryGetResponseType {
  pledgeClass?: string,
  president?: string,
  pledgeMom?: string,
  year?: string,
  members?: PledgeClassMemberType[]
}

interface QueryFilterType {
  year?: string | { $gte: string, $lte: string };
  'members.name'?: { $regex: RegExp };
}

interface ProjectionFilterType {
  projection: {
    [key: string]: number;
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request?.nextUrl?.searchParams;
  const range = searchParams.get('range');
  const show = searchParams.get('show');
  const name = searchParams.get('name');

  const queryFilter: QueryFilterType = {};

  // add time range
  if (range?.includes('s')) {
    queryFilter.year = {
      $gte: range.slice(0,4),
      $lte: `${range.slice(0,3)}9`
    }
  } else if (range) {
    queryFilter.year = range;
  }

  // add search name
  if (name) {
    queryFilter['members.name'] = {
      $regex: new RegExp(`^.*${name}.*$`, 'i')
    };
  }

  const projectionFilter: ProjectionFilterType = {
    projection: {
      _id: 0
    }
  };

  // set fields to get
  if (show) {
    const splitTypes = show.split(',');
    splitTypes?.forEach((item: string) => {
      projectionFilter.projection[item] = 1;
    });
  }


  console.log('>>>>>>>>>>>>>>>>>>>>> api-history: search params', {
    range,
    show,
    name,
    queryFilter,
    projectionFilter
  });


  try {
    const database = await mongodb();

    const response: HistoryGetResponseType[] = await database
      .collection(OST_COLLECTION)
      .find(queryFilter, projectionFilter)
      .sort({
        year: 1
      })
      .toArray();


    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>> api-history: mongodb response', JSON.stringify(response));


    return NextResponse.json(response);
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', `error connectiong with mongo DB, ${err}`);
    return NextResponse.json({
      error: err,
      status: 500
    });
  }
}
