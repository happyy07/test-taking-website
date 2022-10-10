const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = 3200; // <== You can change the port
var fs = require('fs');
var db = JSON.parse(fs.readFileSync('./server/db.json', 'utf8'));
server.use(middlewares);


server.get('/allTests', function (req, res) {
  // See https://github.com/typicode/lowdb
  let testIds=db.tests.map(elm=>{return{id:elm.id,description:elm.description}})
  console.log(testIds)
  if (testIds) {
    res.jsonp({testIds})
  } else {
    res.sendStatus(404)
  }
})
server.use(router);
server.listen(port);