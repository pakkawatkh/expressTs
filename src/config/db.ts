const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'express'
// });

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'express',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


connection.getConnection(function (err: any) {
    if (err) return console.error('error connecting');
    console.log('connected');
}
);

module.exports = connection;