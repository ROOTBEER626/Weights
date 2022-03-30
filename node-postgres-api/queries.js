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

//In a production enviornment, you would want to put your configuration
//details in a seperate file with restrictive permissions that is not accessible 
//from version control
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
  const {username, email } = request.body

  pool.query(
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

//helper class to create an instance of lift
class Lift {
  constructor(lift_id, user_id, created_on, weight, reps, sets) {
    this.lift_id = lift_id;
    this.user_id = user_id;
    this.created_on = created_om;
    this.weight = weight;
    this.reps = reps;
    this.sets = sets
  }
}

const getLifts = (request, response) => {
  pool.query('SELECT * FROM lifts ORDER BY created_on DESC', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//get all lifts belonging to single user

//get all lifts from certain date

//add lift

//delete lift

//edit lift
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
