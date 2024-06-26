const path = require("path");
const express = require("express");

const app = express();
const PORT = 7000;

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

// Middleware to parse JSON requests
app.use(express.json());

// Define the homepage route
app.get("/", (req, res) => {
    return res.render("index.ejs");
});
 
// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
