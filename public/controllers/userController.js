const userModel = require("../models/userModel");

async function getAllUsersController(req, res) {
    try {
        const usuarios = await userModel.getAllUsersModel();
        res.json(usuarios);
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

async function createUserController(req,res){
    try {
        await userModel.createUserModel(req.body);
        return res.sendStatus(200)
    } catch(error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllUsersController,
    createUserController
}