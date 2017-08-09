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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat food'}).then((result, error) => {
  //   console.log(result);
  // }, (error) => {
  //     console.log('There was an oopsie', error);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat food'}).then((result, error) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('There was an oopsie', error);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result, error) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('There was an oopsie', error);
  // });

  // db.collection('Users').deleteMany({name: 'Brady'}).then((result, error) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('There was an error', error);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5988dc04b568eb1004889be6')
  // }).then((result, error) => {
  //   console.log(result);
  // }, (error) => {
  //   console.log('There was an error', error);
  // });

  // db.close();
});