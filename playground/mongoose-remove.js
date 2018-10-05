const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5bab67f922bd35785297419c'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5bab67f922bd35785297419c').then((todo) => {
    console.log(todo);
});