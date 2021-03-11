//dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing - GET
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

//get data from reservation
document.getElementById('res-name');
document.getElementById('res-phone');
document.getElementById('res-email');
document.getElementById('res-unique');








app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));