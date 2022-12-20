
const contactoModels = require('../database/contactoModels');

module.exports = class {
    async createUser(contact){
        await contactoModels.create(contact)

    }
    async getAllUser(){
        const todos = await contactoModels.find();
        return todos;
    }

    async crearContacto(contact){
            await contactoModels.find(contact)
    
        }

    }


