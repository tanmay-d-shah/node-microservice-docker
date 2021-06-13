var mongoose=require("mongoose");
mongoose
    .connect(
        'mongodb://mongo:27019/moviesDB',
        { useNewUrlParser:true }
    );
var conn=mongoose.connection;
conn.on('connnected',function(){
    console.log('database is connected');
})
conn.on('disconnected',function(){
    console.log('database disconnected');
})
conn.on('error',console.error.bind(console,'connection error:'))

module.exports=conn;