const express = require("express");
const app = express();
const path = require("path")
const session = require("express-session");
require('dotenv').config()

// Rutas
const adminRouter = require("./public/routes/adminRoutes");
const userRouter = require("./public/routes/userRoutes");
const loginRouter = require("./public/routes/loginRoutes");
const insertRouter = require("./public/routes/insertRoutes")
const homeRouter = require("./public/routes/homeRoutes")
const productosRouter = require("./public/routes/productosRoutes")
const carritoRouter = require("./public/routes/carritoRoutes")
const comprarRoutes = require("./public/routes/comprarRoutes")

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static(__dirname + '/public'))

var isUser = function(req, res, next) {
  if(req.session && req.session.rol != undefined) {
    return next();
  } else {
    return res.redirect("/");
  }
}

var isAdmin = function(req, res, next) {
  if(req.session && req.session.rol === "ADMIN") {
    return next();
  } else {
    return res.send("No tienes acceso a esto")
  }
}

app.use("/login", loginRouter)


app.get('/', (req, res) => {
  res.redirect("/home")
}) 

app.use('/admin', isAdmin, adminRouter)

app.use('/user', userRouter)

app.post('/logout', function(req, res) {
  req.session.destroy();
  res.redirect("/")
})

app.get("/getUser", function(req, res){
  res.json({ username: req.session.username })
}) 

app.use("/home", homeRouter)

app.use('/insertar', insertRouter)

app.use('/productos', productosRouter)

app.use('/carrito', carritoRouter)

app.use('/comprar', comprarRoutes)

app.get("/prueba", function(req,res) {
  res.render("prueba2", {titulo: "hola"})
})

app.post("/test", function(req,res) {
  var variable = req.body.variable;

  res.json({ title: variable, variable: variable })
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Servidor web iniciado en el puerto ${PORT}`);
});

module.exports = app;