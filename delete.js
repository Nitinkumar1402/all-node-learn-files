const dbConnect = require('./mongdb')

const deleteData=async ()=>{
    let data = await dbConnect();
    
    // let result = await data.deleteOne({name:'max 6'});
     let result = await data.deleteMany({name:'note 5'});
    console.log(result);
    if(result.acknowledged){
        console.log('record deleted');
    }
}
deleteData();