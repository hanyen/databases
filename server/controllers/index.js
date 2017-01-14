var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(function(data) {
        res.send(data);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(data) {
        res.send(data);
      });
    },
    post: function (req, res) {
      models.users.post(function(data) {
        res.send(data);
      });
    }
  }
};

