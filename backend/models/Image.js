
const { joinPaths } = require("@remix-run/router");
const mongoose = require("mongoose");
const { Schema } = mongoose;



const imgSchema = new Schema(
    {
        image : String,
    },
    // {
    //     collation : "ImageDetails"
    // }

);

// const Image = mongoose.model("Image", imgSchema);
// module.exports = Image;

mongoose.model("ImageDetails", imgSchema);