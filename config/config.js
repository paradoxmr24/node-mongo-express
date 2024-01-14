import './env.js';
import './prototypes.js';
import { connectDB } from './database.js';

const dbName = process.env.MONGODB_DATABASE_NAME;
await connectDB(dbName);
