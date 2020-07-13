const express = require('express');
const { Client } = require('pg');

const connectStr = 'postgres://postgres:postgres@localhost:8081/sgt';

const client = new Client({
  connectStr: connectStr
});

client.connect();

var app = express();

app.set('port', process.env.PORT || 3001);

app.get('/', function (req, res, next) {
  client.query('SELECT * FROM grades',
    function (err, result) {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(result.rows);
    });
});

app.listen(3001, function () {
  // eslint-disable-next-line no-console
  console.log('JSON Server listening on port 3001\n');
});

// INSERT INTO grades (name, course, grade, created_on, updated_on) VALUES('Evelyn Toon','Art', 92, current_timestamp, current_timestamp)
// CREATE TABLE grades(
//   id serial PRIMARY KEY,
//   name VARCHAR(50) NOT NULL,
//   course VARCHAR(50) NOT NULL,
//   grade INT NOT NULL,
//   created_on TIMESTAMP NOT NULL,
//   updated_on TIMESTAMP NOT NULL
// );
