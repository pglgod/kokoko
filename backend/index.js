
const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')

const path = require('path')

const upload = require('./middleware/upload')


connectToMongo();
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())


app.get( "/", (req, res) => { 
   return res.json({
    msg: "welcome to KORERO",
    version: "1.0.0"
   })
});



// Routes

app.use( require('./router/auth'));




app.listen(port, ()=>{
    console.log(`backend is running on http://localhost:${port} `)
})
