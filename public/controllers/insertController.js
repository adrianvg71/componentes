const createModal = require("../models/createModel")

async function crearTablas(req, res) {
  try {
    await createModal.llenarTablasModal();
    res.redirect("/home");
  } catch(err) {
    console.log(err);
  }
}

module.exports= {
  crearTablas
}