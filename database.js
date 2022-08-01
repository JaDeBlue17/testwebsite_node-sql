var mysql = require('mysql2');
var conn = mysql.createPool({
  host: 'us-cdbr-east-06.cleardb.net', // Replace with your host name
  user: 'bbdaa91f3a4cd2',      // Replace with your database username
  password: 'a79504d7',      // Replace with your database password
  database: 'heroku_546a6ca300d9703' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;