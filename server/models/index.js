var db = require('../db');
// var db = require('mysql');//hanyen
// console.log(db);//hanyen

module.exports = {
  messages: {
    get: function (callback) {
      console.log('I am in Models/messages/get');
      var queryString = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.connection.query(queryString, function(err, result) {
        // if (err) {
        //   console.log('In Models, fail to read from DB.');
        // } else {
        callback(err, result);
        //}
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      console.log('I am in Models/messages/post');
      var queryString = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.connection.query(queryString, params, function(err, result) {
        // if (err) {
        //   console.log('In Models, fail to write to DB.');
        // } else {
        callback(err, result);
        // }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('I am in Models/users/get');
      var queryString = 'SELECT * FROM users';
      db.connection.query(queryString, function(err, result) {
        // if (err) {
        //   console.log('In models, unable to read user from DB');
        //   throw err;
        // } else {
        callback(err, result);
        // }
      });
    },
    post: function (params, callback) {
      console.log('I am in Models/users/post');
      var queryString = 'INSERT INTO users (username) \
                        value (?)';
      db.connection.query(queryString, params, function(err, result) {
        // if (err) {
        //   console.log('In Models, unable to post user to DB');
        //   throw err;
        // } else {
        //   console.log('Query Result from Users/post:', result);
        //   // result = {key: the value}; //hanyen: THis caused server to crash
        callback(err, result);
        // }
      });
    }
  }
};

