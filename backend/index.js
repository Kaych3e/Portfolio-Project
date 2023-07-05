const express = require("express");
const db = require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;

// Define routes
app.use("/js", express.static(__dirname + "/public/js"));
app.use('/css', express.static(__dirname + "/public/css"));

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set('views', './views');
app.use(cookie());
app.use(express.json());


db.connect((err) => {
    if (err) throw err;
//    console.log('database connected');
})
app.use('/', require('./routes/pages'));
app.use('/api', require('./controllers/auth'));

// Start the server
app.listen(PORT);