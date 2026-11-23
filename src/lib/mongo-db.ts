import 'server-only';

import { MongoClient } from 'mongodb';
import {
  MONGO_DB_LOCAL_URL,
  OST_DATABASE
} from '../constants';

export default async function init(): Promise<any> {
  const client: MongoClient = new MongoClient(`mongodb://${MONGO_DB_LOCAL_URL}`);

  // connect to mongoDB
  try {
    await client.connect();
    console.log('mongo client connected');

    // connect to database
    return client.db(OST_DATABASE);
  } catch (err) {
    console.log('mongo DB connection error', err);
  }
};
