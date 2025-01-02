import express from 'express';
import db from './mongoC.js';

const port = 4001; // Changed to match Dockerfile and pipeline
const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// Built-in Express middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.post('/addUser', async (req, res) => {
  const collection = await db.collection('users');
  const newDocument = { ...req.body, date: new Date() };
  const result = await collection.insertOne(newDocument);
  res.status(201).send(result);
});

app.get('/getUsers', async (req, res) => {
  const collection = await db.collection('users');
  const results = await collection.find({}).toArray();
  res.status(200).send(results);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`);
  });