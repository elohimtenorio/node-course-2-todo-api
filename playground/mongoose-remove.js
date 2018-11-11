const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User}= require('./../server/models/user');
const {ObjectId} = require('mongodb');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove();
// Todo.findByOneAndRemove({_id:'5be7b5e1cceed20126686194'}).then((todo)=>{
//   console.log(todo);
// });

Todo.findByIdAndRemove({_id:'5be7b5e1cceed20126686194'}).then((todo)=>{
  console.log(todo);
});
