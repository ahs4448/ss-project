const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/comments_db")
.then(function(){
    console.log("working");
})
.catch(function(err){
    console.log("this is the issue " + err);
});

