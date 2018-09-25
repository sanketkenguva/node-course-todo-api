console.log('Inside');

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'sanket', age: 29};
// var {name} = user;
// console.log(name);


// Mongo3 use client as argument and get db from client

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db =  client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //     db.collection('Users').insertOne({
    //     //_id: 123,
    //     name: 'Sanket',
    //     age: 29,
    //     location: 'Bangalore'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});

// Mongo2 use db as argument and use db directly

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//     if (err) {
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');

//     db.collection('Users').insertOne({
//         name: 'Sanket',
//         age: 29,
//         location: Bangalore
//     }, (err, result) => {
//         if (err) {
//             return console.log('unable to insert User', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });

//     client.close();
// });