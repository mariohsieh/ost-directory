import 'server-only';

import { NextResponse } from 'next/server';
import mongodb from '@/lib/mongo-db';
import { OST_COLLECTION } from '@/constants';

interface GetResponse {
  year: string
}

export async function GET() {
  try {
    const database = await mongodb();

    const response: GetResponse[] = await database
      .collection(OST_COLLECTION)
      .find({}, {
        projection: {
          year: 1,
          _id: 0
        }
      })
      .sort({
        year: 1
      })
      .toArray();

    console.log('api-history: mongodb read response', response);

    return NextResponse.json(response.map((item) => item.year));
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', `error connectiong with mongo DB, ${err}`);
    return NextResponse.json({
      error: err,
      status: 500
    });
  }
}
