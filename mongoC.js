import { MongoClient } from 'mongodb';

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://integrationninjas:${password}@devcluster.kel2i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log('MongoDB connection successful');
} catch (e) {
  console.error('MongoDB connection failed:', e);
}
const db = conn.db('integration_ninjas');
export default db;
