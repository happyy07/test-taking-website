const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port
var fs = require('fs');
var db = JSON.parse(fs.readFileSync('db.json', 'utf8'));
server.use(middlewares);

server.use(router);
// Add custom routes before JSON Server router
server.get('/tests', function (req, res) {
  // See https://github.com/typicode/lowdb
  let testIds=db.tests.map(elm=>elm.testId)

  if (testIds) {
    res.jsonp({testIds})
  } else {
    res.sendStatus(404)
  }
})

server.listen(port);