var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('I am in Controllers/messages/get');
      models.messages.get(function(data) {
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('I am in Controllers/messages/post');
      models.messages.post(function(data) {
        res.send(data);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('I am in Controllers/users/get');
      models.users.get(function(data) {
        res.send(data);
      });
    },
    post: function (req, res) {
      console.log('I am in Controllers/users/post');
      models.users.post(req, res, function(data) { //hanyen: I added req, res arguments
        res.send(data);
      });
    }
  }
};

