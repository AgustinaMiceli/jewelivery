const express = require('express');
const conectarDB = require ('./database/conexion')
const cors= require('cors');
const path=require('path');
const router= require('./routes/contactoRouter');
require('dotenv').config();
//require('./database/conexion');

const contactoRouter = require ('./routes/contactoRouter');


const app=express();
const PORT= process.env.PORT;

conectarDB();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({extended:true}));

/*app.use('/obtener', contactoRouter);
app.use('/crear', contactoRouter)
app.get('/', router);*/

app.use('/contacts', contactoRouter);

app.get('/',router);

app.listen(PORT, ()=> {
  console.log(`Servidor corriendo en el Puerto: ${PORT}`);
})

module.exports= app;



