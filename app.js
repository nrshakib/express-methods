const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const userRoute = require('./Routes/users.route');

app.use("/user", userRoute);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/register.html");
})
app.post('/register', (req, res) => {
    const name = req.body.fullName;
    res.send(`Your Name is ${name}`);
})
// query params
app.get('/users', (req, res) => {
    const { id, name } = req.query;
    res.send(`<h1>It's a get request at Home for ${id} and ${name}</h1>`);
});
// route params
app.get('/userId/:id/userAge/:age', (req, res) => {
    const { id, age } = req.params;
    res.send(`<h1>Age of user ${id} is ${age}</h1>`);
});
//headers
app.get('/', (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`${id} Hello Biatch ${name}`);
})
//JSON data
app.post('/user', (req, res) => {
    const name = req.body.name;
    res.send(`Hello ${name}`);
})

//Regular Expression(RegExp)
app.get('/product/:id([0-9]{3})', (req, res) => {
    res.send(`<h2>ID is: ${req.params.id}</h2>`);
});
app.get('/product/:title([a-zA-Z0-9]+)', (req, res) => {
    res.send(`<h2>Title is: ${req.params.title}</h2>`);
});
//wild card
app.get('*', (req, res) => {
    res.status(404).send(`<h2>Not a valid url</h2>`);
})

app.use((req, res) => {
    res.send("<h1>404! Not Found.</h1>");
});

module.exports = { app, PORT }; 