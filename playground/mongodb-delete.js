console.log('Inside');

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db =  client.db('TodoApp');
    
    //delete Many
    // db.collection('Todos').deleteMany({text: 'first to do'}).then((result) => {
    //     console.log(result);
    // });
    //delete one
    // db.collection('Todos').deleteOne({text: 'second to do'}).then((result) => {
    //     console.log(result);
    // });

    //find one and delete one
    // db.collection('Todos').findOneAndDelete({text: 'second to do'}).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});