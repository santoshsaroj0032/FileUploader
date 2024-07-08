// const path = require("path");
// const express = require("express");
//  const multer = require("multer");
 
// const app = express();
// const PORT = 7000;

//  const storage = multer.diskStorage({
// destination: function(req,file,cb){
// return cb(null , "./uploads");
// },
// filename: function(req , file,cb){
// return cb(null , `${Date.now()}-${file.originalname}`);
// },
// });

//  app.use(express.json());
// const upload = multer({storage});

 
//  // Set the view engine to ejs
// app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views"));

//  // Middleware to parse URL-encoded requests
// app.use(express.urlencoded({ extended: false }));

// // Define the homepage route
// app.get("/", (req, res) => {
// return res.render("index");
// });

// app.post("/upload", upload.single("profileImage"), (req, res) => {
// console.log(req.body);
// console.log(req.file);
// return res.redirect("/");
// // Middleware to parse JSON requests
 
// // Define the homepage route
// app.get("/", (req, res) => {
// return res.render("index.ejs");

//  });

// // Start the server
// app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));



const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 7000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON requests
app.use(express.json());

// Define the homepage route
app.get("/", (req, res) => {
  res.render("index");
});
    
app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
