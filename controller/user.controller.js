const deleteUser = require("../mongoServices/deleteUser");
const findUser = require("../mongoServices/findUser");
const insert = require("../mongoServices/insertUser");
const getAllUser = require("../mongoServices/readAllUser");
const update = require("../mongoServices/updateUser");
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const isUser = await findUser(email);
    if (isUser.length > 0) {
        return res.status(200).send('User Already Exist')
    }
    const bcryptPassword = bcrypt.hashSync(password, 10);
    const dbResult = await insert(name, email, bcryptPassword);
    res.send(dbResult);

}

const signin = async (req, res) => {
    const { email, password } = req.body;
    const dbResult = await findUser(email);
    if (dbResult.length > 0) {
        try {
            const passowordMatch = bcrypt.compareSync(password, dbResult[0].password);
            if (passowordMatch) {
                res.status(200).send(dbResult)

            }
        } catch (error) {
            console.log(error)
            return res.send('Password not correct')
        }

    } else {
        res.status(404).send('User not found')
    }
}

const getallUser = async (req, res) => {
    const result = await getAllUser();
    res.status(200).send(result);
}

const updateUser = async (req, res) => {
    const { id, name, email, password } = req.body;
    const isUser = await findUser(email);
    const bcryptPassword = bcrypt.hashSync(password, 10);
    // console.log(id)
    const dbResult = await update(id, name, email, bcryptPassword);
    if (dbResult) {
        res.send('User update successfully')
    } else {
        res.send('Something went wrong')
    }
}

const deleteuser = async (req, res) => {
    const {id} = req.body;
    // console.log(id)
    const dbResult = await deleteUser(id);
    
    if (dbResult) {
        res.status(200).send('user delete successfully');
    } else {
        res.status(404).send("user not found")
    }
}

module.exports = { signup, getallUser, signin, updateUser, deleteuser }