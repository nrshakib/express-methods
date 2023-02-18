const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send("<h1>It's a get request at Register</h1>");
});

router.get('/about', (req, res) => {
    res.send("<h1>It's a get request at About</h1>");
});

router.get('/login', (req, res) => {
    res.send("<h1>It's a get request at LogIn</h1>");
});

module.exports = router;