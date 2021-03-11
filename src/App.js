import "./styles.css";
import React, {useState, useEffect} from 'react'

export default function App() {
const [users, setUsers] = useState([])

const url = 'https://api.github.com/users'

const getUsers = async () => {
  const response = await fetch(url);
  const users = await response.json();
console.log (users)
  setUsers(users);
}
useEffect(() => {
 getUsers();
},[])
  return (
    <div className="App">
      <ul>
        {users.map((user) => {
          const {id,login, avatar_url,html_url} = user;
          return(
            <li key = {id}>
            <img src={avatar_url} alt={login} />
           <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
           </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
