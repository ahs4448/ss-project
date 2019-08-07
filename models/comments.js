const mongoose = require("mongoose");
const config = require("./config");
const Schema = mongoose.Schema;



const Comments = new Schema({
    firstname: String,
    lastInitial: String,
    email: String,
    starRating: String,
    message: String
});

module.exports= mongoose.model("Comments",Comments);