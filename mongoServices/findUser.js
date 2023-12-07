const mongodb = require('../config/mongoConfig')
const findUser = async (email) =>{
    const db = mongodb.getDb();
    const collection = db.collection('users');
    const result = await collection.find({email}).toArray();
    return result;
}

module.exports= findUser;