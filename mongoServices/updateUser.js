const { ObjectId } = require('mongodb');
const mongodb = require('../config/mongoConfig');

const update = async (id, name, email, password) => {
    // console.log(id)
    try {
        const updateUser = {
            name,
            email,
            password, 
            updated_at : new Date()
        };
        const db = mongodb.getDb();
        const collection = db.collection('users');
        const newobjectId = new ObjectId(id);
        const result = await collection.updateOne(
            { _id: newobjectId}, 
            { $set: updateUser },
            { returnDocument: 'after' } 
        );
        return result;
    } catch (error) {
        console.log(error)
    }
   
    
};

module.exports = update;
