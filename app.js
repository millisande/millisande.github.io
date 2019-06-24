require('dotenv').config;
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.listen(PORT, () => console.info(`http://localhost:${PORT}`));
