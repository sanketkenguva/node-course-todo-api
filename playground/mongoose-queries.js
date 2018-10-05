const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var userid = '5bab67f922bd35785297419c';
if (!ObjectID.isValid(userid)) {
    console.log('userID not valid');
}

User.find({
    _id: userid
}).then((users) => {
    console.log('Users', users);
});

User.findOne({
    _id: userid
}).then((user) => {
    console.log('User', user);
});

User.findById(userid).then((user) => {
    if (!user) {
        return console.log('user Id not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));

// var id = '5bb20883a6c300285f8bc68b';
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));