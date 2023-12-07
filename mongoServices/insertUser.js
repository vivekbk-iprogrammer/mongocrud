// insert.js

const mongodb = require('../config/mongoConfig');

const insert = async (name, email, password) => {
  try {
    const newUser = { 
      name, 
      email, 
      password,
      created_at : new Date(),
      updated_at : null,
      status : 1
    };
    const db = mongodb.getDb();
    const collection = db.collection('users'); 
    const result = await collection.insertOne(newUser);
    // console.log(result);
    if(result.acknowledged){
        return newUser
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = insert;
