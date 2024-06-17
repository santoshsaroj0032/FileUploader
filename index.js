const path= require("path");
const express = require("express");


const app = express();
const PORT = 7000;

 app.set("view engine", "ejs");
 app.set("views", path.resolve("./views"));

 app.use(express.json());

 app.get("/", (req, res)=>{
    return res.render("homepage");
 })


 app.listen(PORT , ()=> console.log(`Server Started at PORT:7000`));
 