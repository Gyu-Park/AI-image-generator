const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/openai', require('./routes/openaiRoutes'));


app.listen(port, () => {
    console.log("Server started on port 5000");
});

// a pink panda playing soccer at beach