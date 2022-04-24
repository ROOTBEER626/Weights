const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_weights',
  password: 'password',
  port: 5432,
})

class User {
  constructor(user_id, username, password, email, created_on, last_login) {
    this.user_id =  user_id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.created_on = created_on;
    this.last_login = last_login
  }
}

exports.getUsers = (req, res) => {

  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if(error) {
      throw error;
    }
    res.json({
      userList: results.rows
    })
  })
}

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
    if(error) {
      throw error
    }
    res.json({
      userList: results.rows
    })
  })
}
