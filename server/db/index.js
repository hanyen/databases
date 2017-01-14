var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

con.connect(function(err) {
  if (err) {
    console.log('Error connecting to database');
    return;
  }
  console.log('Connecntion established');
});

con.end(function(err) {});

