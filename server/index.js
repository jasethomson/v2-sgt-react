const express = require('express');
const { Client } = require('pg');

const connectStr = 'postgres://dev:postgres@localhost:8081/sgt';

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

// require('dotenv/config');
// const path = require('path');
// const connection = require('./connection');
// const express = require('express');
// const companies = require('./companies');
// const creators = require('./creators');
// const campaigns = require('./campaigns');
// const submissions = require('./submissions');
// const winningAds = require('./winningAds');
// const user = require('./user');

// const server = express();
// let PORT = process.env.PORT;

// connection.connect();

// server.use('/api/companies', companies);
// server.use('/api/creators', creators);
// server.use('/api/campaigns', campaigns);
// server.use('/api/submissions', submissions);
// server.use('/api/winningAds', winningAds);
// server.use('/api/user', user);
// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// server.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({
//     error: 'Internal Server Error',
//     message: 'An unexpected error has occurred'
//   });

// });

// server.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log('its listening closely');
// });

// INSERT INTO grades (name, course, grade, created_on, updated_on) VALUES('Evelyn Toon','Art', 92, current_timestamp, current_timestamp)
// CREATE TABLE grades(
//   id serial PRIMARY KEY,
//   name VARCHAR(50) NOT NULL,
//   course VARCHAR(50) NOT NULL,
//   grade INT NOT NULL,
//   created_on TIMESTAMP NOT NULL,
//   updated_on TIMESTAMP NOT NULL
// );
