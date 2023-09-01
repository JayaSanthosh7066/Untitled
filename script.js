const express=require("express");
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
var ejs=require('ejs');
mongoose.connect("mongodb://127.0.0.1:27017/WeBook",{useNewUrlParser: true});
const nodema=require("nodemailer");
const transport=nodema.createTransport({
    service:"gmail",
    auth:{
        user:"jayasanthoshamalakanti@gmail.com",
        pass:"jgsbgrshlcoxneqc"
    }
});
const app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended: true}));
const list=mongoose.model("detail",li);
app.listen("3000",function()
{
    console.log("server listening on 3000");
})