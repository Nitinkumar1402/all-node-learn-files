const dbConnect= require('./mongdb')

const updateData=async ()=>{
    let data=await dbConnect();
   // console.warn(data);
    let result =await data.updateOne(
        {name:'max 5'},
        {
            $set:{name:'max pro 5'}
        }
    );
    console.warn(result);

}

updateData();