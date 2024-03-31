const obtenerConexion = require("../config/db");
const bcrypt = require("bcrypt-nodejs");
let conexion;

(async function miConexion() {
    conexion = await obtenerConexion();
})()

async function getAllUsersModel() {
    try {
        const [rows] = await conexion.query("SELECT * FROM usuarios");
        return rows;
    } catch(error) {
        throw new Error("Error al buscar usuarios")
    }
}

async function getUserById(userId) {
    try {
        const [rows] = await conexion.query("SELECT * FROM usuarios WHERE idusuario = ?", [userId]);
        return rows[0];
    } catch(error) {
        throw new Error("Error al buscar el usuario")
    }
}

async function createUserModel(usuarioDATA) {
    try {
        let { email, username, password } = usuarioDATA;
        let rol;
        if(usuarioDATA.rol) {
            rol = usuarioDATA.rol
        } else {
            rol = "USER"
        }
        password = bcrypt.hashSync(password);

        await conexion.query("INSERT INTO usuarios (email, username, password, rol) VALUES (?, ?, ?, ?)", [email, username, password, rol]);
        console.log("usuario insertado");
        return
    } catch(error) {
        console.log("Error al registrar un usuario "  + error)
        throw new Error("Error al insertar un usuario")
    }
}

async function deleteUserModel(userId) {
    try {
        await conexion.query("DELETE FROM usuarios WHERE idusuario = ?", [userId]);
      } catch (error) {
        console.log("Error al borrar un usuario " + error);
      }
}

async function updateUserModel(userId, userData) {
    try {
        // Construye la consulta SQL dinámica
        let sql = 'UPDATE usuarios SET ';
        const values = [];

        // Itera sobre los campos proporcionados en userData
        for (const key in userData) {
            // Agrega el nombre del campo y su valor a la consulta SQL
            sql += `${key} = ?, `;
            values.push(userData[key]);
        }

        // Elimina la última coma y espacio de la consulta SQL
        sql = sql.slice(0, -2);

        // Agrega la condición WHERE para actualizar el usuario específico
        sql += ' WHERE idusuario = ?';
        values.push(userId);

        // Ejecuta la consulta SQL
        await conexion.execute(sql, values);
        console.log('Usuario actualizado correctamente');
    } catch(error) {
        console.log("error editando el usuario " + error)
    }
}

module.exports = { getAllUsersModel,
createUserModel,
deleteUserModel,
updateUserModel,
getUserById }