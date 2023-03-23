

const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017';
const databaseName='e-comm'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
   return db.collection('products');
//     // let data = await collection.find({}).toArray();
//     // console.log(data)


}

dbConnect().then((res)=>{ 
    //all data chahiye to 
 
    // res.find().toArray().then((data)=> {
        //single data chahiye to
        res.find({name:"phone1"}).toArray().then((data)=> {
        console.warn(data);
    })
})

