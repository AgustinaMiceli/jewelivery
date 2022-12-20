const express = require('express');
const router = express.Router();

const{
    crearConsulta,
    obtenerConsulta
} =require('../controller/contactoController');


router.get('/obtener',  obtenerConsulta);
router.post('/crear', crearConsulta);


module.exports = router;
