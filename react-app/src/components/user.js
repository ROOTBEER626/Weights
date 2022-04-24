import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    fetch(`/users/${id}`).then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setUser(jsonRes.userList))
  }, [id]);

  const userList = user.map(u => <li> id: {u.user_id}, username: {u.username}, password: {u.password}, email: {u.email}, created_on: {u.created_on}, last_logiin: {u.last_login} </li>);
  return (<div>
          {userList}
          </div>)
}

export default User;
