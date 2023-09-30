


const express = require("express")
const app = express();

app.listen(3000, ()=>{
      console.log("Api is running on port 3000")
})


app.get('/',(req, res)=>{
      res.send('Hello node api')
});









































// const fs = require("fs/promises");


// const express = require("express")
// const cors = require("cors");
// const _ = require("lodash");
// const {v4: uuid} = require("uuid");


// const app = express();
// app.use(express.json());
// app.get("/outfit",(req, res)=>{
//       const tops = ["Black","White","Orange"];
//       const jeans = ["Grey"];

//       res.json({
//             tops: _.sample(tops),
//             jeans: _.sample(jeans)

//       });
// })

// app.post("/comments",async (req, res) => {
//       const id = uuid();
//       const content = req.body.content;

//       if(!content){
//             return res.sendStatus(400);
//       }

//       await fs.mkdir("data/comments", {recursive:true});
//       await fs.writeFile(`data/comments/${id}.txt`, content)

//       res.status(201).json( {
//                 id: id
//             }
//       )
// })

// app.get("/comments/:id",async  (req,res) =>{

//       const id = req.params.id;
//       let content;

//       try {
//            content = await fs.readFile(`data/comments/${id}.txt`,"utf-8");

//       } catch (error) {
//            return res.sendStatus(404)
//       }

//       res.json({
//             content: content
//       })

// })

// app.listen(3000, ()=> console.log("API Server is running..."))

