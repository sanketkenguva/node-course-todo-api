console.log('Inside');

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db =  client.db('TodoApp');
//will not work if direct id mentioned
    //db.collection('Todos').find({_id: '5ba8984896c39736a4767113'}).toArray().then((docs) => {
//create new ObjectID with the id value then find
    // db.collection('Todos').find({_id: new ObjectID('5ba8984896c39736a4767113')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

     db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })
    //db.close();
});