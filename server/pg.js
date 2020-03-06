const { Client } = require('pg')
// const pool = new Pool({
//   user: 'shubham',
//   host: 'localhost',
//   database: 'ipldata',
//   password: 'shubham@123',
//   port: 5432,
// })
// pool.query('SELECT * FROM data', (err, res) => {
//   console.log(err, res.rows)
//   pool.end()
// })
const client = new Client({
  user: 'shubham',
  host: 'localhost',
  database: 'ipldata',
  password: 'shubham@123',
  port: 5432,
})
client.connect()
client.query('SELECT * FROM matches', (err, res) => {
  console.log(err, res.rows)
  client.end()
})