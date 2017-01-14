var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query(/* read the messages table */, function(err, result) {
        if (err) {
          console.log('In Models, fail to read from DB.');
        } else {
          callback(result);
        }
      });
    }, // a function which produces all the messages
    post: function (callback) {
      db.query (/* write message into message table in DB */, function(err, result) {
        if (err) {
          console.log('In Models, fail to write to DB.');
        } else {
          callback(result);
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query(/* SELECT messages from messages table where messages.user_id = users.id and users.id = {username} */, function(err, result) {
        if (err) {
          console.log('In models, unable to read user from DB');
          throw err;
        } else {
          callback(result);
        }
      });
    },
    post: function (callback) {
      db.query(/* insert query command */, function(err, result) {
        if (err) {
          console.log('In Models, unable to post user to DB');
          throw err;
        } else {
          callback(result)l;
        }
      });
    }
  }
};

