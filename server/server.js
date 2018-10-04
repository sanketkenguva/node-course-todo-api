const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
//var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos)=> {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    //res.send(req.params);
    var id = req.params.id;

    // valid id using isvalid
        // 404 - send back empty send
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // findbyid
        // success
            //if todo - send it back
            // if no todo - send back 404 with empty body
        // error
            // 400 - send empty body back
    Todo.findById({_id: id}).then((todo)=> {        
        if(!todo) {
            res.status(404).send();
        }                
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
})

module.exports = {app};

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

// var newUser = new User({
//     email: 'sfa@sdfaaa.saf'
//  });
 
//  newUser.save().then((doc) => {
//      console.log('Saved User', doc);
//  }, (e) => {
//      console.log('unable to save User ', e);
//  })

