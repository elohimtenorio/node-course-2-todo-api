const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User}= require('./../server/models/user');
const {ObjectId} = require('mongodb');

var id = '6be6ebcfa00c1306658e1eee11';

// if(!ObjectId.isValid(id)){
//   console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo)
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id',todo)
// }).catch(e)=>console.log(e);

User.findById('5be29fd03b4b630c3b0e98f9').then((user)=>{
  if (!user){
    return console.log('Unable tu find user');
  }

  console.log(JSON.stringify(user,null,2));
})
