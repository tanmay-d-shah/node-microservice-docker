const express=require('express');
const mongoose=require('mongoose');
const app= express();


app.use(express.urlencoded({extended:false}));

var moviesDB=require('./database/db');


const Movies=require('./model/Movie');

app.get('/',(req,res) =>{
    Movies.find()
    .then(movies =>res.json(movies))
    .catch(err => res.status(404).json({msg:'No movie found'}))
});



app.get('/getMovie/:movieID', function(req,res){
    var movieID=req.params.movieID;
    Movies.findById(movieID, function(err,Movie){
        if(err){
            console.log("error occured. movieID: "+movieID);
        }
        else{
            //console.log("movie is "+Movie);
            res.send(Movie);
        }
        
    })
    
})
const port=8000;
app.listen(port,()=>console.log('Server running on port '+port));