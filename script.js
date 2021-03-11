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



// Justin's code starts at this point. Dom's code is stupid.

const viewTablesBtn = document.getElementById('view-tables');
const reservationBtn = document.getElementById('res-button');
// const homeBtn = document.getElementById('**Button ID**');
const nameEl = document.getElementById('** Name ID **');
const phoneEl = document.getElementById('** Phone ID **');
const emailEl = document.getElementById('** email ID **');
const uniqueEl = document.getElementById('** unique ID **');

viewTablesBtn.addEventListener('click', () => {
        fetch(`path to API spot${object}`), {
            method: 'GET',
            headers: {
                'Content-Type': 'application.json',
            },
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

reservationBtn.addEventListener('click', () => {
        fetch(`path to API spot${object}`), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application.json',
            },
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });