const salaModel = require("../models/salaModel");

exports.get = async (req, res) => {

    const salas = await salaModel.listarSalas();
    return salas;

}