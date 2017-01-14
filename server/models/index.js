var db = require('../db');
// var db = require('mysql');//hanyen
// console.log(db);//hanyen

module.exports = {
  messages: {
    get: function (callback) {
      console.log('I am in Models/messages/get');
      var queryString = 'SELECT * FROM messages;';
      db.handleQuery(/*read the messages table*/queryString, function(err, result) {
        if (err) {
          console.log('In Models, fail to read from DB.');
        } else {
          callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (callback) {
      console.log('I am in Models/messages/post');
      var queryString = 'SELECT * FROM messages;';
      db.handleQuery (/* write message into message table in DB */queryString, function(err, result) {
        if (err) {
          console.log('In Models, fail to write to DB.');
        } else {
          callback(result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('I am in Models/users/get');
      var queryString = 'SELECT * FROM users';
      db.handleQuery(/* SELECT messages from messages table where messages.user_id = users.id and users.id = {username} */ queryString, function(err, result) {
        if (err) {
          console.log('In models, unable to read user from DB');
          throw err;
        } else {
          callback(result);
        }
      });
    },
    post: function (req, res, callback) {
      console.log('I am in Models/users/post');
      var queryString = 'INSERT INTO users SET ?'; //hanyen
      // var queryString = 'SELECT * FROM users;'; //hanyen
      var write = {'id': null, 'name': req.body.username};
      db.handleQuery(queryString, write, function(err, result) {
        if (err) {
          console.log('In Models, unable to post user to DB');
          throw err;
        } else {
          console.log('Query Result from Users/post:', result);
          // result = {key: the value}; //hanyen: THis caused server to crash
          callback(result);
        }
      });
    }
  }
};

