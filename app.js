const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.set("views", "./views");
app.set("view engine", "ejs"); //EJS allows use of HTML CSS JS

app.get("/home", (req, res) => {
    const name = "Paolo";
    res.render("index", { name }); //reference the index.ejs file
});


app.listen(PORT, () => {

    console.log(`Connected to port ${PORT}`);

});