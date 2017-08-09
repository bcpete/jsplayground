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

  // db.collection('Todos').find({
  //   _id: new ObjectID('598b70130b0c31c1a2339ca6')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  //   db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

    db.collection('Users').find({
    name: 'Brady'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // db.close();
});

