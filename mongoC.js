import { MongoClient } from 'mongodb';

const connectToDatabase = async () => {
  const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
  const connectionString = `mongodb+srv://tejtejass827:${password}@devclust.kel2i.mongodb.net/?retryWrites=true&w=majority&appName=DevClust`;
  const client = new MongoClient(connectionString);

  let conn;
  try {
    conn = await client.connect();
    console.log('MongoDB connection successful');
  } catch (e) {
    console.error('MongoDB connection failed:', e);
  }
  return conn.db('integration_ninjas');
};

const db = await connectToDatabase();
export default db;
