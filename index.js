const { app, PORT } = require('./app');

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});