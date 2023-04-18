const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Diego')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query('SELECT name FROM people', (error, results, fields) => {
      if (error) throw error;
      const people = results.map(result => `<p>${result.name}</p>`);
      const html = `<h1>Full Cycle Rocks!</h1>${people.join('')}`;
      res.send(html);
    });
    connection.end()
  });
  

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})