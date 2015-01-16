var express = require('express')
var app = express()

app.use(express.static(__dirname));

var todos = [
                            { id:"1", title:'hond 1 uitlaten', description:'john moet dit doen!', price:'***' },
                            { id:"2", title:'poes 2 uitlaten', description:'jos moet dit doen!', price:4.95 },
                            { id:"3", title:'krokodil 3 uitlaten', description:'axel moet dit doen!', price:4.95 },
                            { id:"4", title:'everzwijn 4 uitlaten', description:'henk moet dit doen!', price:4.95 }
                            ];

app.get('/todos', function(req, res){
   setTimeout(function() {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(todos));
    }, 2000);
});

app.post('/todo', function(req, res) {
    console.log("a new todo has arrived!!");
    res.end("succes");    
}); 

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})