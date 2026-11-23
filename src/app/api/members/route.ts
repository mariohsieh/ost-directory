import 'server-only';

import { NextResponse } from 'next/server';
import mongodb from '@/lib/mongo-db';

export async function GET() {
  try {
    const database = await mongodb();

    const allMembers = await database
      .collection('1980s')
      .find({})
      .toArray();

    console.log('mongo db response', allMembers);

    return NextResponse.json(allMembers);
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', `error connectiong with mongo DB, ${err}`);
    return NextResponse.json({
      error: err,
      status: 500
    });
  }
}
