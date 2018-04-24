const express=require('express');
const mongoose = require('mongoose');
const Book = require('./models/book.schema');
const app=express(); 
const PORT = process.env.port || 5000;


//---------CONNECTING TO MONGO START-----------//
const databaseUrl = 'mongodb://localhost:27017/library';
mongoose.connect(databaseUrl);// this establishes connection to mongo database



mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error)
});

//-----------CONNECTING TO MONGO END------------//

//get route for /books

app.get('/books', (req, res) => {
    // database Read/Find
    Book.find({}) // this is replacing $.ajax request
        .then((dataFromDatabase) => { // this is the response from the database
            // success, good things happened
            console.log('data from database', dataFromDatabase);
            res.send(dataFromDatabase);
        })
        .catch((error) => {
            // error, bad thigns happened
            console.log('error with Book.find', error);
            res.sendStatus(500);
        });
    
    
    
    
    
    
    
    
    
    
    
    
    
});

app.listen(PORT, () => {
    console.log(`up and running on port: ${PORT}`);
});

