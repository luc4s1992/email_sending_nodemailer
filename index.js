const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');

const Email = require('./src/emailSend')

app.get('/', function(req, res) {
    res.send("Hello world")
});

app.get('/emailsend', function(req, res) {
    try {
        Email.emailSend();
    } catch (error) {
        console.log("error =>", error)
    }
    res.send("Email sent")
})

app.listen(9000);
console.log("Listening server on 9000");
/** server code */