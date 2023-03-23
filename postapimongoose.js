const express = require('express');
const products = require('./products');
require('./config');
const Products= require("./products");

const app = express();
app.use(express.json());
app.post("/create",async (req,res)=>{
    let data = products(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
});

app.get("/list", async (req,res)=>{
    let data = await products.find();
    res.send(data);
})

app.delete("/delete/:_id", async (req,res)=>{
//    console.log(req.params)
   let data= await products.deleteOne(req.params);
    res.send(data);
})

app.put("/update/:_id", async (req,res)=>{
    //    console.log(req.params)
       let data= await products.updateOne(
        req.params
       ,
       {
        $set:req.body
       }
       );
        res.send(data);
    })


app.listen(5000);