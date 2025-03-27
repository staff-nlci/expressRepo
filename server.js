const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
app.get('/',(req,res)=>{
    // res.send('Hello World!');
    res.sendFile(__dirname + '/index.html');
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/about.html');
}); //
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/contact.html');
}); //

app.listen(process.env.PORT, () => {
    console.log('Server running on port 3000');
})