const path = require("path");
const bcrypt = require("bcrypt-nodejs");
const userModel = require("../models/userModel");

function getLoginPage(req, res) {
    res.sendFile(path.join(__dirname, "..", "login.html"))
}

async function logUser(req, res) {
    const { email, password } = req.body;
    const users = await userModel.getAllUsersModel();
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      if(bcrypt.compareSync(password, existingUser.password)) {
        req.session.isLoggedIn = true;
        req.session.username = existingUser.username;
        req.session.rol = existingUser.rol;
        req.session.userId = existingUser.idusuario;

        
        return res.sendStatus(200)
      } else {
        return res.status(401).json({ error: 'La contraseña es incorrecta'})
      }
    } else {
      return res.status(400).json({ error: 'El usuario no existe' });
    }
}

module.exports = {
    getLoginPage,
    logUser
}