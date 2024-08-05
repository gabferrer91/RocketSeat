// npm install mysql2
// const mysql = require('mysql2');

import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3vitor91',
    database: 'lojinha'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

const selectQuery = 'show tables;';

connection.query(selectQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});