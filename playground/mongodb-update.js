//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');//Destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

// findOneAndUpdate
// db.collection('Todos').findOneAndUpdate(
//   {_id:new ObjectID('5be28731aa2d6600ffc5542f')},
//   {
//     $set:{
//       completed:true
//     }
//   },{
//     returnOriginal:false
//   }
// ).then(result=>{
//   console.log(result)
// });
db.collection('users').findOneAndUpdate(
  {_id:new ObjectID('5bdc257327ee8d096527a778')},
  {
    $set:{
      name:'Elohim'
    },
    $inc:{age:1}
  },{
    returnOriginal:false
  }
).then(result=>{
  console.log(result)
});
  client.close();
});
