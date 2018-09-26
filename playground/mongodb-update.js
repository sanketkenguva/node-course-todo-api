console.log('Inside');

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db =  client.db('TodoApp');
    
    //update Many
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5baa1b06d2e2156d14395627')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //      console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5baa065523c55702ac8036f9')
    },{
        $set: {
            name: 'Shiva'            
        }, 
        $inc: {
            age: 1            
        }
    }, {
        returnOriginal: false
    }).then((result) => {
         console.log(result);
    });

    
    //update one
    // db.collection('Todos').deleteOne({text: 'second to do'}).then((result) => {
    //     console.log(result);
    // });

    //find one and update one
    // db.collection('Todos').findOneAndDelete({text: 'second to do'}).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});