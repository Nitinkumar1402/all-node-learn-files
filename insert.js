const dbConnect = require('./mongdb')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert([
        { name: 'note 5', brand: 'vivo', price: 1000, category: 'mobile' },
        { name: 'note 6', brand: 'mi', price: 1800, category: 'mobile' },
        { name: 'note 7', brand: 'mi', price: 1500, category: 'mobile' },
        { name: 'note 7 pro', brand: 'vivo', price: 12000, category: 'mobile' },
        { name: 'note 10 pro', brand: 'redmi', price: 13000, category: 'mobile' }
    ]);

    if (result.acknowledged) {
        console.log('data inserted')
    }
}
insert();

// const dbConnect = require('./mongdb');

// const insert =async ()=>{
//    let db = await dbConnect();
//   let result = await db.insert(
//       [
//           {name:'max 5',brand:'micromax',price:420,category:'mobile'},
//           {name:'max 6',brand:'micromax',price:520,category:'mobile'},
//           {name:'max 7',brand:'micromax',price:620,category:'mobile'},

//       ]
//   )
//   if(result.acknowledged)
//   {
//       console.warn("data is inserted")
//   }
// }

// insert();
 