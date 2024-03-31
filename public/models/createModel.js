const obtenerConexion = require("../config/db");

let conexion;

(async function miConexion() {
    conexion = await obtenerConexion();
})()

async function llenarTablasModal() {
  await tablaUsuarios();
  await tablaCategorias();
  await tablaProductos();
  await tablaCarrito();
}

async function tablaUsuarios() {
  try {
    const [rows] = await conexion.query("SELECT * FROM usuarios");
    if(rows.length === 0) {
      console.log("La tabla usuarios existe pero no tiene registros")
      await llenarTablaUsuarios();
    }
  } catch(err) {
    console.error("La tabla usuarios no existe, creandola:");
    await crearTablaUsuarios();
    await llenarTablaUsuarios();
  }
}

async function crearTablaUsuarios() {
  try {
    await conexion.query(`CREATE TABLE usuarios (
        idusuario INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(60) NULL,
        username VARCHAR(12) NULL,
        password VARCHAR(255) NULL,
        rol VARCHAR(45) NULL,
        PRIMARY KEY (idusuario),
        UNIQUE INDEX email_UNIQUE (email ASC));`);
    console.log("Tabla usuarios creada correctamente.");
} catch (err) {
    console.error("Error al crear la tabla usuarios:", err);
    throw err; // Re-lanzar el error para que sea manejado fuera de la función si es necesario.
}
}

async function llenarTablaUsuarios() {
  try {
    await conexion.query(`INSERT INTO usuarios (email, username, password, rol) VALUES 
    ('admin@admin.admin', 'admin', '$2a$10$7Ge/RctahwIPo291LpXuIepcsUuY4m.5JqagJZzvU.DKe.eD2SNaS', 'ADMIN'),
    ('user@user.user', 'user', '$2a$10$PQ9Dnd87h2eJL79uORlss.EyivXv4d/yq9O1w0PU/Evn4gBZgQbTC', 'USER');`)
    console.log(`Datos insertados`)
  } catch(err) {
    console.log(`Error al insertar en usuarios ${err}`)
  }
}

async function tablaCategorias() {
  try {
    const [rows] = await conexion.query("SELECT * FROM categorias")
    if(rows.length === 0) {
      console.log("La tabla categorias exsite pero no tiene datos")
      await llenarTablaCategorias();
    }
  } catch(error) {
    console.log("La tabla categorias no existe, creandola:")
    await crearTablaCategorias();
    await llenarTablaCategorias();
  }
}

async function crearTablaCategorias() {
  try {
    await conexion.query(`CREATE TABLE categorias (
      idcategoria INT NOT NULL AUTO_INCREMENT,
      nombre VARCHAR(45) NULL,
      PRIMARY KEY (idcategoria));`)
      console.log("Tabla categorias creada correctamente")
  } catch(error) {
    console.log("Error al crear la tabla categorias: " + error)
    throw error;
  }
}

async function llenarTablaCategorias() {
  try {
    await conexion.query(`INSERT INTO categorias (nombre) VALUES 
    ("Placas Base"),
    ("Procesadores"),
    ("Tarjetas Graficas"),
    ("Discos Duros"),
    ("Memoria RAM"),
    ("Fuentes Alimentacion")`)
    console.log("Datos insertados")
  } catch(error) {
    console.log("Error insertando datos en categorias " + error);
    throw error;
  }
}

async function tablaProductos() {
  try {
    const [rows] = await conexion.query("SELECT * FROM productos")
    if(rows.length === 0) {
      console.log("La tabla productos existe pero no tiene datos")
      await llenarTablaProductos();
    }
  } catch(error) {
    console.log("La tabla productos no existe, creandola:")
    await crearTablaProductos();
    await llenarTablaProductos();
  }
}

async function crearTablaProductos() {
  try {
    await conexion.query(`CREATE TABLE productos (
      idproducto INT NOT NULL AUTO_INCREMENT,
      nombre VARCHAR(45) NULL,
      precio REAL NULL,
      img LONGTEXT NULL,
      categoria INT NULL,
      PRIMARY KEY (idproducto),
      INDEX fk_prod_cat_idx (categoria ASC) VISIBLE,
      CONSTRAINT fk_prod_cat
        FOREIGN KEY (categoria)
        REFERENCES categorias (idcategoria)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);
    `)
    console.log("Tabla productos creada")
  } catch(err) {
    console.log("Error creando la tabla productos " + err)
    throw err;
  }
}

async function llenarTablaProductos() {
  try {
    await conexion.query(`INSERT INTO productos (nombre, img, precio, categoria) VALUES
    ('Intel i5 12400F', 'https://img.pccomponentes.com/articles/83/834922/1636-intel-core-i5-12400f-44-ghz.jpg', 136, (SELECT idcategoria FROM categorias WHERE nombre="Procesadores")),
    ('MSI Geforce RTX 4080 SUPER 16GB', 'https://img.pccomponentes.com/articles/1081/10811513/1776-msi-geforce-rtx-4080-super-ventus-3x-oc-16gb-gddr6x-dlss3.jpg', 1150, (SELECT idcategoria FROM categorias WHERE nombre="Tarjetas Graficas"));`)
    console.log("Datos insertados en la tabla productos")
  } catch(err) {
    console.log("Error al insertar en productos " + err);
    throw err;
  }
}

async function tablaCarrito() {
  try {
    const [rows] = await conexion.query("SELECT * FROM carrito");
    if(rows.length === 0) {
      console.log("La tabla carrito existe pero no tiene registros")
      await llenarTablaUsuarios();
    }
  } catch(err) {
    console.error("La tabla carrito no existe, creandola:");
    await crearTablaCarrito();
    await llenarTablaCarrito();
  }
}

async function crearTablaCarrito() {
  try {
    await conexion.query(`
    CREATE TABLE carrito (
      id INT NOT NULL AUTO_INCREMENT,
      producto INT NULL,
      usuario INT NULL,
      PRIMARY KEY (id),
      INDEX fk_car_pro_idx (producto ASC) VISIBLE,
      INDEX fk_car_usu_idx (usuario ASC) VISIBLE,
      CONSTRAINT fk_car_pro
        FOREIGN KEY (producto)
        REFERENCES productos (idproducto)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT fk_car_usu
        FOREIGN KEY (usuario)
        REFERENCES usuarios (idusuario)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);
    `)
    console.log("Tabla carrito creada")
  } catch(err) {
    console.log("Error creando la tabla carrito " + err)
    throw err;
  }
}

async function llenarTablaCarrito() {
  try {
    await conexion.query(`INSERT INTO carrito (producto, usuario) VALUES (1, 1);`)
    console.log("Datos insertados en la tabla carrito")
  } catch(err) {
    console.log("Error al insertar en carrito " + err);
    throw err;
  }
}


module.exports = {
  llenarTablasModal
}