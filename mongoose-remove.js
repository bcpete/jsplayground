const {mongoose} = require('./../node-todo-api/server/db/mongoose');
const {Todo}     = require('./../node-todo-api/server/models/todo');
const {ObjectID} = require('mongodb');
const {User}     = require('./../node-todo-api/server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({})

// Todo.findByIdAndRemove({id})

Todo.findByIdAndRemove('599cc265fa02927cc2f94df3').then((todo) => {
  console.log(todo);
});