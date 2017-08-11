// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



var user = {name: 'Brady', age: 25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) => {
  if(err){
    console.log('Unable to connect to db', err);
  }
  console.log('Connected to MongoDB server successfully');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('598b790d0b0c31c1a2339e0f')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('598a65fbab146310f9355d51')
  }, {
    $set: {
      name: 'Big Poppa'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});