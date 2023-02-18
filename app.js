const express = require('express');
const app = express();
const PORT = 3000;
const userRoute = require('./Routes/users.route');

app.use("/user", userRoute);

app.get('/', (req, res) => {
    res.send("<h1>It's a get request at Home</h1>");
});

app.use((req, res) => {
    res.send("<h1>404! Not Found.</h1>");
});

module.exports = { app, PORT };