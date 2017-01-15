var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
console.log('MySQL createConnection established');

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to database');
    return;
  }
  console.log('Connecntion established');
});

// var handleQuery = function(query, readOrWrite, callback) {
//   console.log('inside handleQuery');
//   con.query(query, readOrWrite, callback);
// };

// con.end(function(err) {});

exports.connection = connection;