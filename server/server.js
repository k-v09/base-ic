const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'base_ic_user',
  password: 'your_password_here',
  database: 'base_ic',
});
app.get('/api/data', (req, res) => {
    pool.query('SELECT * FROM your_table_name', (error, results, fields) => {
        if (error) {
            console.error('Error executing query', error);
            res.status(500).json({ error: 'Error fetching data' });
        } else {
            res.json(results);
        }
    });
});