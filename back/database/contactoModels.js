
const mongoose= require('mongoose');
const {Schema} = require('mongoose');


const contactoSchema = new Schema({
    nombre:{
        type:'string',
        required: true
    }, 
    whatsapp: {
        type: 'number',
        required: true
    },
    email:{
        type: 'string', 
        required: true
    }, 
    mensaje: {
        type: 'string',
        required: true
    }
});


module.exports = mongoose.model('users', contactoSchema);




