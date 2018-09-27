var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newTodo = new Todo({
//     text: 'mongoose string'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('unable to save Todo ');
// })

// var secondTodo = new Todo({
//     text: 'mongoose string',
//     completed: true,
//     completedAt: 123
// });

// var secondTodo = new Todo({
//    text: '  Edit this video '
// });

// secondTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('unable to save Todo ', e);
// })

var newUser = new User({
    email: 'sfa@sdfaaa.saf'
 });
 
 newUser.save().then((doc) => {
     console.log('Saved User', doc);
 }, (e) => {
     console.log('unable to save User ', e);
 })

