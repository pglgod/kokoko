
const multer = require('multer')



const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../src/uploads/images')
    },
    filename:( req, file, cb ) =>{
        cb(null, file.fieldname + Date.now().toString() + '.jpg' )
    }
})
const upload = multer({ storage: storage })

module.exports = upload;