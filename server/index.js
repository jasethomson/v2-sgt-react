require('dotenv/config');
const connection = require('./connection');
const express = require('express');
// const grades = require('./grades');
const server = express();
const PORT = process.env.PORT;
connection.connect();

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error has occurred'
  });

});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening on', PORT);
});
