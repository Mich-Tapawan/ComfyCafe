const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: '33060',
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
    const {customerID, item, price, quantity, size} = req.body;

    const sql = 'INSERT INTO orders (customer_id, item, price, quantity, size) VALUES (?, ?, ?, ?, ?)';
    const values = [customerID, item, price, quantity, size];

    db.query(sql, values, (err, result)=>{
        if(err){
            console.log('Error inserting data:'+err);
            res.status(500).send('Error inserting data');
        }
        else{
            console.log('Data inserted successfully');
            res.send('Data inserted successfully');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));