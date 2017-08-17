const {mongoose} = require('./../node-todo-api/server/db/mongoose');
const {Todo}     = require('./../node-todo-api/server/models/todo');
const {ObjectID} = require('mongodb');
const {User}     = require('./../node-todo-api/server/models/user');

// var id = '599508f1f4c61e12176d97b911';
var id = '5993576c4a20326a108fd216';

User.findById(id).then((user) => {
  if(!user){
    return console.log('User Id not found');
  }
  
  console.log(user);
}).catch((e) => console.log(e));


// if(!ObjectID.isValid(id)) {
//   console.log('Invalid Id');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

