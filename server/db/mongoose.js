var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://sanketkenguva:Sanetk123@ds223343.mlab.com:23343/todoapp' || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};