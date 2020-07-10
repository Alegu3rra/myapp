var express = require('express');
var cors = require('cors')
var app = express();


app.use(cors())
app.use('/', express.static('myapp/public'));

app.get("/", (req, res) => {
  res.sendFile('myapp/public/index.html', {root: __dirname})
})
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.get("/gato", (req, res) =>{
	res.send('hello world');
} )

server = app.listen(8082, function (err) {
  if (err) return console.log('Hubo un error :(')
  console.log(`Listening at ${8082}`);
  console.log("gatico");

})