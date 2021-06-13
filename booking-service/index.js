const express=require('express');
const mongoose=require('mongoose');
const app= express();
const axios=require('axios');
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended:false}));
app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())

var ticketsDB=require('./database/db');

const Tickets=require('./model/Ticket');
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/',(req,res) =>{
    Tickets.find()
    .then(tickets =>res.send(tickets))
    .catch(err => res.status(404).json({msg:'No tickets found'}))
});

app.post('/',async function (req,res){

    var User=req.body.user;
    var Movie=req.body.movie;

    const ticket=new Tickets({
        person_name:User.name,
        movie_name:Movie.name,
        screen: Math.floor(Math.random() * 4) + 1,
        date:new Date()
    })

    ticket.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log('document is saved');
        }
    })
    res.send(ticket);
    
})




const port=8002;
app.listen(port,()=>console.log('Server running on port '+port));