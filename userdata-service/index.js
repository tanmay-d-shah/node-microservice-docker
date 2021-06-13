const express=require('express');
const mongoose=require('mongoose');
const { readyState, emit } = require('./database/db');
const app= express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())

var usersDB=require('./database/db');
const Users=require('./model/User');

app.get('/',(req,res) =>{
    Users.find()
    .then(users =>res.send(users))
    .catch(err => res.status(404).json({msg:'No user found'}))
});

app.post('/loginUser',async function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    //console.log(name+" "+email);

    
    Users.findOne({name:name,email  :email},async function (err,result) {
        if(!result){
            const user=new Users({name:name,email:email});
            const savedUser=await user.save();
            res.send(savedUser);
        }
        else if(result){
            res.send(result);
        }
        else{
            console.log("error occurred "+err);
            res.send("error occured. Check logs")
        }
    })
    
})

app.get('/getUser/:userID', function(req,res){
    var userID=req.params.userID;
    
    Users.findById(userID, function(err,User){
        if(err){
            console.log("error occured. userID "+userID);
        }
        else{
            //console.log("user is "+User);
            res.send(User);
        }
        
    })
})


const port=8001;
app.listen(port,()=>console.log('Server running on port '+port));