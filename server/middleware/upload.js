const path = require("path")
const multer = require("multer")

let  storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, 'uploads/')
    },
    filename: function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now() + ext)
    }
})

let upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "image/png" || file.mimetype == "image/jpg " || file.mimetype == "image/jpeg"
        ){
            callback(null,true)
        }else{
            console.log('only jpg & png file supported!')
            callback(null,false)
        }
    },
    limits: {
        fileSize: 1024 *1024 * 2
    }
})

module.exports = upload