
const contactoModels = require('../database/contactoModels');
const contactoService = require ('../services/contactoService');
const user = new contactoService();

const crearConsulta= async(req, res) =>{
await user.createUser(req.body);
    res.json({
        user: 'Creado'
    })
console.log(req.body);
}

const obtenerConsulta= async(req, res) =>{
   const usuarios = await user.getAllUser();
    res.json({
        usuarios
    })
    
}

module.exports={
    crearConsulta,
    obtenerConsulta,
};




