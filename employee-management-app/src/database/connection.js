const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'your_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
db.getConnection()
  .then(connection => {
    console.log('Database connection established successfully.');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error.message);
  });

module.exports = db;