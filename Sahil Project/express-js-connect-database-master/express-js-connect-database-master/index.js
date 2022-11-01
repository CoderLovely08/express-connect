const express = require('express');
const app = express();
const { Client } = require("pg");
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "pass@123",
    database: "test"
})
client.connect();
console.log("connected!");
const PORT = 3000;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render(__dirname + "/public/index.html");
});
// console.log(__dirname+"/public/component/login.html");
app.post('/signup', (req, res) => {
    console.log("Posting data");
    var firstnm = req.body.firstnm;
    var lastnm = req.body.lastnm;
    var email = req.body.email;
    var password = req.body.pass;
    console.log(firstnm, lastnm, email, password);
    client.query('INSERT INTO studentdata(firstname, lastname, email, studentpassword) values($1,$2,$3,$4)', [firstnm, lastnm, email, password]).then(data => {
        console.log("Inserted Successfully");
        res.render(__dirname + "/public/component/login.html");
    });
});

app.post("/login", (req, res) => {
    var email = req.body.email;
    var password = req.body.pass;
    client.query("select * from studentdata where email = $1 and studentpassword=$2", [email, password]).then(data => {
        console.log(" Login successfull");
    });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));