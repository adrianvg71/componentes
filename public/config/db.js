const mysql = require("mysql2/promise");
require('dotenv').config();

async function obtenerConexion() {
    try {
        const conexion = await mysql.createConnection({
            host: process.env.HOST_DB,
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABASE,
            port: process.env.PORT_DB 
          });
          console.log("Conexion realizada a la base de datos")
          return conexion;
    } catch(error) {
        console.log("Error al establecer la conexion a la base de datos")
        throw error;
    }

}

module.exports = obtenerConexion;