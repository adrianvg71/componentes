const mysql = require("mysql2/promise");

async function obtenerConexion() {
    try {
        const conexion = await mysql.createConnection({
            host: 'componentes-componentes.a.aivencloud.com',
            user: 'avnadmin',
            password: 'AVNS_-sGdl6TG_nRX9zIOemT',
            database: 'componentes',
            port: 25357
          });
          console.log("Conexion realizada a la base de datos")
          return conexion;
    } catch(error) {
        console.log("Error al establecer la conexion a la base de datos")
        throw error;
    }

}

module.exports = obtenerConexion;