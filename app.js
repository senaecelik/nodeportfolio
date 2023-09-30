

//importlama
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const db = require('./config/database')
const User = require("./routes/user.js")



dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))


app.get('/', (req, res) => res.send('Hello World!' ))
app.use('/', User)


const PORT = process.env.PORT || 5000;


db()

app.listen( PORT, () =>{
      console.log("Server is running on port: 3000")
})






























// app.use(express.json());


// const User = require("./models/userModel")
// const username = encodeURIComponent("admin");
// const password = encodeURIComponent("Udbhy1278");


// app.post('/user',async (req, res)=>{
//       try {

//             const user = await User.create(req.body);
//             res.status(200).json(user);
          
//       } catch (error) {
//             res.status(500).json({message:error.message});
//       }
   
// });

// app.get('/users',async (req, res)=>{
//       try {
//             const user = await User.find({});
//             res.status(200).json(user);
//       } catch (error) {
//             res.status(500).json({message:error.message});
//       }
// });

// app.get('/users/:id',async(req, res)=>{
//       try {
//             const {id} = req.params
//             const user = await User.findByID(id);
//             res.status(200).json(user);
//       } catch (error) {
//             res.status(500).json({message:error.message});
//       }
// });


// mongoose.connect(`mongodb+srv://${username}:${password}@portfolioapi.ughb95k.mongodb.net/Portfolio-API?retryWrites=true&w=majority`)
// .then(()=>{
//       console.log('connected to Mongo DB');
//       app.listen( port, ()=>{
//             console.log("Api is running on port 5000");
//       })
// }).catch((error)=>{
//       console.log(error);
// })


































