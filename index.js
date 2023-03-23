// // // const fs=require('fs');
// // // fs.writeFileSync("hello.txt","hello world")

// // console.log("package.json");
// // console.log(10+10);

// const MongoClient = require('mongodb');
// const url ='mongodb://localhost:27017';
// const database = 'e-comm'
// const client = new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db('database');
//     let collection = db.collection('products');
//     console.log(collection.find({}).toArray());


// }

// getData();


const {MongoClient} = require('mongodb');
const url= 'mongodb://0.0.0.0:27017';
const databaseName='e-comm'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();