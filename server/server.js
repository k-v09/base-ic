const express = require('express');
const mysql = require('mysql2');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.json());

// Get users
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.json(results);
    }
  });
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  pool.query('SELECT * FROM users WHERE id = ?', [userId], (error, results, fields) => {
    if (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Error fetching user' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// Create new post
app.post('/api/posts', (req, res) => {
  const { title, content, userId } = req.body;
  pool.query('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, userId], (error, results, fields) => {
    if (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Error creating post' });
    } else {
      res.status(201).json({ id: results.insertId });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});