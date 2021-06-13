const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        default:Date.now
    },
    language:{
        type:String,
        default:"English"
    },
    duration:{
        type:Number,
        default:120
    },
    screen:{
        type:Number,
    }
});
var MovieModel=mongoose.model('Movie',MovieSchema);
module.exports= MovieModel;