//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');//Destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // const db = client.db('TodoApp');
  // db.collection('Todos').find({
  //   _id:new ObjectID('5bdc2340ce4087095dd1a719')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // },(err)=>{
  //   console.log('Unable to fetch todos',err)
  // });

  // const db = client.db('TodoApp');
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err)
  // });

  const db = client.db('TodoApp');
  db.collection('users').find({name:'Elohim'}).toArray().then((docs)=>{
    console.log(`Users`);
    console.log(JSON.stringify(docs,undefined,2c));
  },(err)=>{
    console.log('Unable to fetch users',err)
  });

  client.close();
});
