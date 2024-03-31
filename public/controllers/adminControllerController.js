

function mostrarPaginaAdmin(req, res) {
    res.render("admin", {user: req.session})
}

module.exports = { mostrarPaginaAdmin }