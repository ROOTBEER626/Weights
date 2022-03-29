const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_weights',
  password: 'password',
  port: 5432,
})

//helper class to create an instance of user 
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

//helper function to get the data of a user 
function getData(user_id) {

  user = pool.query('SELECT * FROM users WHERE user_id = $1', [user_id])

  const current_user = new User(user.user_id,user.username, user.password, user.email, user.created_on, user.last_login)

  return current_user
}
//In a production enviornment, you would want to put your configuration
//details in a seperate file with restrictive permissions that is not accessible 
//from version control
//
const getUsers = (request, response) => {

  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const user_id = parseInt(request.params.user_id)

  pool.query('SELECT * FROM users WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)
  const { username, password, email } = request.body

  pool.query('INSERT INTO users (username,password,email,created_on) VALUES($1, $2, $3, CURRENT_TIMESTAMP)', [username,password,email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertinsertId}`)
  })
}

const updateUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)
  //const current_user = getData(user_id)
  const {username, email } = request.body

  pool.query(
    //'UPDATE users SET username = $1, password = $3, email = $2, created_on = $4 WHERE user_id = $5',
    //[username, email, current_user.password, current_user.created_on, current_user.user_id],
    'UPDATE users SET username = $1, email = $2 WHERE user_id = $3',
    [username, email, user_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${user_id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)

  pool.query('DELETE FROM users WHERE user_id = $1', [user_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${user_id}`)
    })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
