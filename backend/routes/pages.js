// Importing the required dependencies
const express = require('express');
const router = express.Router();

// GET request handler for the root URL ("/"). Renders the "index" template.
router.get('/', (req, res) => {
    res.render('index');
});

// GET request handler for the "/Signup.html" URL. Sends the "Signup.html" file from the "./public/" directory.
router.get('/Signup.html', (req, res) => {
    res.sendFile("Signup.html", { root: './public/'});
});

// GET request handler for the "/Login.html" URL. Sends the "Login.html" file from the "./public/" directory.
router.get('/Login.html', (req, res) => {
    res.sendFile("Login.html", { root: './public/'});
});

// Export the router to be used in other parts of the application
module.exports = router;
