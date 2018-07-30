const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log("Connection failed"+err);
  }
  console.log("Connection success");
  //db.close();
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text:'This is my first Insert',
  //   insert:true
  // },(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name:'Taher',
  //   age:23,
  //   location: 'Pune'
  // },(err,result)=>{
  //   if(err){
  //     return console.log(err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Todos').find().toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  });

  db.collection('Todos').find().count().then((count)=>{
    console.log(count);
  });

  client.close();
});
