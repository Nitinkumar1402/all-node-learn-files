const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSchema);
  let data = new ProductsModel({
    name: "max2 pro",
    price: 1000,
    brand: "zolo",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async() => {
  const Products = mongoose.model("products", ProductSchema);
  let data = await Products.updateOne({
    name:"max 100 pro" },
    {
        $set:{price:7000}
    })
    console.log(data);
};

// saveInDB();
// updateInDB();

const deleteInDB = async()=>{
    const Products = mongoose.model("products", ProductSchema);
    let data = await Products.deleteOne({
        name:"max 100 pro"
    });
    console.log(data);
}
// deleteInDB();

const findInDB = async()=>{
    const Products = mongoose.model("products", ProductSchema);
    let data = await Products.find({
        name:"max2 pro"
    });
    console.log(data);
}
findInDB();