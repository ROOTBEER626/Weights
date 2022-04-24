const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const port = process.env.PORT || 3001
const app = express();


//app.use(bodyParser.json())
//app.use(
 // bodyParser.urlencoded({
 //   extended: true
  //})
//)

app.use("/users/", require("./routes/userRoutes"));
app.use("/users/:id", require("./routes/userRoutes"));

/*
app.get('/something', (req, res) => {
  res.json("Node.js, Express, and Postgres API");
});

app.get("/api", (req, res) => {
  res.json({message: "Hello"});
});

app.get('/users', db.getUsers)
/*
app.get('/users', function(req,res,next)  {
  var users = db.getUsers();
  users;
});
///


app.post('/users', db.createUser)
app.post('/users/:user_id', db.updateUser)
app.delete('/users/:user_id', db.deleteUser)
*/
app.listen(port, () => {
  console.log(`App is running on port ${port}.`)
})


