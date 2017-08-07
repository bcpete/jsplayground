const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) => {
  if(err){
    console.log('Unable to connect to db', err);
  }
  console.log('Connected to MongoDB server successfully');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // db.close();

    db.collection('Users').insertOne({
    name: 'Brady',
    age: 23,
    location: 'StLouis'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });


  db.close();
});