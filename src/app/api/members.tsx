import 'server-only';

import mongodb from "@/app/lib/mongo-db";

export async function GET() {
  try {
    const database = await mongodb();

    const allMembers = await database
      .collection('1980s')
      .find({})
      .toArray();

    console.log('all members', allMembers);
    return Response.json(allMembers);
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', `error connectiong with mongo DB, ${err}`);
  }
}
