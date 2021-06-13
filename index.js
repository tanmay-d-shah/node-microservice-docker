const express = require("express");
const axios=require('axios');
const app=express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
var userID="";

app.get('/showMovies',async function(req,res){
    axios.get('http://localhost:8000')
    .then(response =>{
        const movies=response.data;
        
        res.render('movie-table',{movieData:movies})
    })
})

app.get("/",function(req,res){
    res.render('login-page')
})

app.post("/",function(req,res){
    var email=req.body.email;
    var name=req.body.name;
    
    axios.post('http://localhost:8001/loginUser',{
        name:name,
        email:email
    })
    .then(response =>{
        //session user
        
        userID=response.data._id;
        res.redirect('/showMovies');    
    })
    
})

app.get('/book/:movieID',async function(req,res){
    var movieID=req.params.movieID;
    
    var User;
    var Movie;

    await axios.get('http://localhost:8000/getMovie/'+movieID)
    .then(response =>{
        Movie=response.data;
    })

    await axios.get('http://localhost:8001/getUser/'+userID)
    .then(response =>{
        User=response.data;
    });

    axios.post('http://localhost:8002',{
        movie:Movie,
        user:User
    })
    .then(response =>{
        res.send(response.data);
    })
})

const port=8003;
app.listen(port,()=>console.log('Server running on port '+port));