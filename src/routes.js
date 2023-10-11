const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Hello',
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;
