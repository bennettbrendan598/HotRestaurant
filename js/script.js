//dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing - GET
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../html/home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../html/tables.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '../html/reserve.html')));

//get data from reservation
/*
document.getElementById('res-name');
document.getElementById('res-phone');
document.getElementById('res-email');
document.getElementById('res-unique');
*/

//reservation and waitlist variables
let waitList = [{
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
];
let reservation = [{
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
];

//Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).
/*
--receive POST request with JSON object
--check to see how many reservations there are (reservation.length)
----*if* reservations <5 - 
-------Schedule Reservation
-------return Confirmation (true)
----add to wait list
----return waitlist confirmation (false)
*/

const tableCheck = new Promise((resolve, reject) => {
    const newReservation = req.body;
    if (reservation.length < 5) {
        reservations.push(newReservation);
        return true;
    };
    waitList.push(newReservation);
    return false;
});



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