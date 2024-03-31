const { getAllUsersModel, deleteUserModel, updateUserModel, createUserModel, getUserById } = require("../models/userModel");

async function getAdminUserPage(req,res) {
  const users = await getAllUsersModel();
  const user = await getUserById(req.session.userId);
  if(user) {
    req.session.isLoggedIn = true;
    req.session.username = user.username;
    req.session.rol = user.rol;
    req.session.userId = user.idusuario;
  }

  res.render('adminUsers', {usuarios: users, user: req.session})
}

async function deleteUser(req,res) {
  try {
    await deleteUserModel(req.params.id)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}
 
async function editUser(req,res) {
  try {
    await updateUserModel(req.params.id, req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

async function addUser(req, res) {
  try {
    await createUserModel(req.body)
    res.sendStatus(200)
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAdminUserPage,
  deleteUser,
  editUser,
  addUser
}