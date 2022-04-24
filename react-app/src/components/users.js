import React, {useState, useEffect} from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/users").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setUsers(jsonRes.userList))
  },[]);

  const userList = users.map(user => <li key={user.user_id}>id: {user.user_id}, username: {user.user_username}, password: {user.password}, email: {user.email}, created_on {user.created_on}, last_login: {user.last_login}</li>);
  return (<div>
          {userList}
    </div>)
}

export default Users;
