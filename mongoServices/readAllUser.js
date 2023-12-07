const mongodb = require('../config/mongoConfig');

const getAllUser = async () => {
  try {
    const db = mongodb.getDb();
    const collection = db.collection('users');
    const result = await collection.find().toArray();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = getAllUser;
