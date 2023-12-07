const { MongoClient } = require('mongodb');
require('dotenv').config()
// Connection URL
const url = process.env.URL
const client = new MongoClient(url);

// Database Name
const dbName =  process.env.DBNAME

async function main() {
  try {
    await client.connect();
    console.log('Mongo Db Connected successfully to server');
    return 'done.';
  } catch (err) {
    console.error('Error connecting to the server:', err);
    throw err;
  }
}

const getDb = () => {
  return client.db(dbName);
}

module.exports = { main, getDb };
