const express = require('express');
const dbConnect = require('./mongodb')
const app = express();

app.use(express.json());

app.get('/',async (req, res) => {
    let data =await dbConnect();
    data=await data.find().toArray();
   

    res.send(data)
});


app.post('/',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body)
    res.send(result);
    console.log(req.body)
})

// app.put("/", async (req,res)=>{

//     let data = await dbConnect();
//     let result =await data.updateOne({name:req.body.name},{$set:req.body})

//     // console.log(req.body)
//     res.send({result:"updated"})
// })


// if edit name even tha type this code--------

app.put("/:name", async (req,res)=>{

    let data = await dbConnect();
    let result =await data.updateOne({name:req.params.name},{$set:req.body})

    // console.log(req.body)
    res.send({result:"updated"})
})

app.listen(5000)
