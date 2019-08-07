const express = require("express");
const app = express();
const Comments = require("./models/comments");
const port = process.env.PORT || 3000;




app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.get("/", function (req, res) {
    res.render("home");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.get("/reviewchildcare", function (req, res) {
    res.render("reviewchildcare");
});

app.get("/reviewride", function (req, res) {
    Comments.find({}, function (err, comments) {

        //console.log(comments);
        res.render("reviewride", { comments });
    });
});

app.post("/reviewride", function (req, res) {
    Comments.create(req.body.comment, function (err, data) {
        if (err) {
            console.log(err);
        }
    });
    console.log(req.body.comment);
    res.redirect("/reviewride");
});


app.listen(port, function () {
    console.log("App listening on port " + port);
});



