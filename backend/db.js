

const mongoose = require('mongoose');

require('dotenv').config();



mongoURI = process.env.MONGO_URI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Conectado a MongoDB")
    }).catch(()=>{
        console.log('failed to connect')
    })
}

module.exports = connectToMongo;