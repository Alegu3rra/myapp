var express = require('express');
var cors = require('cors');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(cors())
app.use('/', express.static('myapp/public'));
// accept url encoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// accept json 
app.use(bodyParser.json());

//mysql connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '8Conejos?',
    database: 'prueba_node'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
//home
app.get("/", (req, res) => {
    res.sendFile('myapp/public/index.html', { root: __dirname })
})

//show all
app.get("/users", (req, res) => {
    const sql = `SELECT * from users`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('not results');
        }
    });
});
//show by id
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * from users WHERE id = ${id}`;
    //always use ` for the query if u use variables
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('not result');
        }
    });
});
//add
app.post('/add', (req, res) => {
    const sql = 'INSERT INTO users SET ?';
    const userObj = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    };
    connection.query(sql, userObj, err => {
        if (err) throw err;
        res.send('user created');
    });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastname, email, password } = req.body;
    const sql = `UPDATE users SET name = '${name}', lastname = '${lastname}', email = '${email}', password = '${password}'
    WHERE id = ${id}`;
    connection.query(sql, err => {
        if (err) throw err;
        res.send('user update');
    });
});
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id = ${id}`;
    connection.query(sql, err => {
        if (err) throw err;
        res.send('user deleted');
    });

});

server = app.listen(8082, function(err) {
    if (err) return console.log('Hubo un error :(')
    console.log(`Listening at ${ 8082 }`);
    console.log("gatico");

})