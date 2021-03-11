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
/*
document.getElementById('res-name');
document.getElementById('res-phone');
document.getElementById('res-email');
document.getElementById('res-unique');
*/

//reservation and waitlist variables

app.get('/api/waitlist', (req, res) => {
    let waitList = req.params.waitList;

    let waitList = [
    {
        name: "jones smith",
        phone: "888-707-5587",
        email: "jones.smith@yahoo.com",
        uniqueId: "1121",
    },
    {
        name: "wild bill",
        phone: "321-707-5877",
        email: "wild.bill@aol.com",
        uniqueId: "66",
    },
    {
        name: "jack kennedy",
        phone: "897-707-1687",
        email: "jack.the.kennedy@gmail.com",
        uniqueId: "36",
    },
]},

app.get('/api/reservation', (req, res) => {
    let reservation = req.params.reservation;

    let reservation = [
    {
        name: "Willy",
        phone: "77-707-5587",
        email: "willy@frontier.com",
        uniqueId: "1",
    },
    {
        name: "George Harrison",
        phone: "606-770-5587",
        email: "george.h@the.com",
        uniqueId: "21",
    },
    {
        name: "Paul Starr",
        phone: "474-054-8787",
        email: "paul.starr@y.com",
        uniqueId: "4",
    },
    {
        name: "John Lenon",
        phone: "888-777-8587",
        email: "Lenon.J@yo.com",
        uniqueId: "121",
    },
    {
        name: "Ringo McCartney",
        phone: "188-707-5587",
        email: "Ringo.M@oo.com",
        uniqueId: "111",
    },
]}





app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));