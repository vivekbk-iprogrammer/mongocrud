const { ObjectId } = require('mongodb');
const mongodb = require('../config/mongoConfig');

const deleteUser = async (id) => {
    try {
        const updateUser = { 
            updated_at : new Date(),
            status : 0
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
        console.log(error);
    }
};

module.exports = deleteUser;
