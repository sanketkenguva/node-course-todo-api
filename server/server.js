require('./config/config');

const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
//var {User} = require('./models/User');

var app = express();
//console.log(process.env.PORT);
const port = process.env.PORT || 3000;


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

app.delete('/todos/:id', (req, res) => {
    //res.send(req.params);
    var id = req.params.id;

    // valid id using isvalid
        // 404 - send back empty send
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // remove todo by id
        // success
            //if todo - send it back
            // if no todo - send back 404 with empty body
        // error
            // 400 - send empty body back
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            res.status(404).send();
        }                
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(404).send();
    })
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
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

