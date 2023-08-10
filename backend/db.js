

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://pglgod:pglgod@users.a5ocftk.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Conectado a MongoDB")
    }).catch(()=>{
        console.log('failed to connect')
    })
}

module.exports = connectToMongo;