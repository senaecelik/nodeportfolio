


const mongoose =require("mongoose");

const db =()=>{
      mongoose.connect(process.env.Mongo_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
      }).then(()=> {
            console.log("Mongo DB connected")
      }).catch((err)=>{
           
            console.log(err);
      })
      
}

module.exports = db;

