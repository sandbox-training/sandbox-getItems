require('dotenv').config();
const seneca = require('seneca')();
const data = require('../sandbox-data');

seneca.add({ role: 'item', cmd: 'getItems' }, (message, reply) => {
  data.Item
    .findAll()
    .then(items => reply(null, { response: items }))
    .catch(error => reply(error, null));
});

seneca.listen({
  port: process.env.PORT,
  host: process.env.HOST || 'localhost',
});
