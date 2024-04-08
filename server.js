const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: '3306',
    user: 'root',
    password: '11252004',
    database: 'itemsDB'
});

db.connect((err)=>{
    if (err){
        throw err;
    }
    console.log('MySQL connected');
});

app.post('/insert_data', (req, res)=>{

})