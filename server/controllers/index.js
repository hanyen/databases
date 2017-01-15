var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('I am in Controllers/messages/get');
      models.messages.get(function(err, results) {
        if (err) {
          throw err;
        }
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('I am in Controllers/messages/post');
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('I am in Controllers/users/get');
      models.users.get(function(err, results) {
        if (err) {
          throw err;
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('I am in Controllers/users/post');
      var params = [req.body.username]; //TODO: make sure it matches the client side
      models.users.post(params, function(err, results) { 
        if (err) {
          throw err;
        }
        res.sendStatus(201);
      });
    }
  }
};

