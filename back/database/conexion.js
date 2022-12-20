
const express = require('express');
const mongoose= require('mongoose');
const {MONGO }= require('mongodb');
const { db } = require('./contactoModels');
require('dotenv').config({path:'.env'});
URL= process.env.MONGO;

const conectarDB = async = async () => {
    //exports.getConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false, 
            serverApi: ServerApiVersion.v1 
        })
    }catch (error) {
        return 'Error en mi conexión'
    }
}

const conexion= mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

mongoose.connection.on('connected', () => {
    console.log('Conexión correcta');
})

mongoose.connection.on('error', () => {
    console.log('Error en mi conexion')
})


//module.exports= conexion;
module.exports = conectarDB;