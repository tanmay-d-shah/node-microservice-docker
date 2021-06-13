const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TicketSchema=new Schema({
    person_name:{
        type:String,
        required:true
    },
    movie_name:{
        type:String,
        required:true
    },
    screen:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
    

})
var TicketModel=mongoose.model('Ticket',TicketSchema);
module.exports=TicketModel;