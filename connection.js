const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'your_username',
    password: 'your_password',
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;
