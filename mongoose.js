const mongoose = require('mongoose');

const main = async () =>{
    mongoose.set('strictQuery', true);
     await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
     mongoose.set('strictQuery', true);
     const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
     }); 
     const ProductsModel = mongoose.model('products',ProductSchema);
     let data =new ProductsModel({name:'m100', price:1000});
     let result = await data.save();
     console.log(result); 
      
}

main();