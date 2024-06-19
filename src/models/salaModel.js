const db = require("./db");

const listarSalas = () => {
    return db.findAll("salas");
}

module.exports = {listarSalas}