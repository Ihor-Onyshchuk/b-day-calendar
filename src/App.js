import React, { useState, useEffect } from 'react';

import avatarSrc from './assets/img/user.png';
import { fetchUsers } from './services';
import { monthOptions } from './config';

function App() {
  const [users, setUsers] = useState({});
  const [activeMonth, setActiveMonth] = useState(undefined);

  useEffect(() => {
    fetchUsers()
      .then(users => setUsers(users))
  }, []);

  const months = Object.keys(users).length
    ? monthOptions(users)
    : [];

  console.log('users', users);
  console.log('month options', Object.keys(users).length && monthOptions(users));

  return (
    <div className="container" >
      <div className="row">
        <div className="col">
          {months.map(({ value, text, color }) => (
            <div
              key={text}
              style={{ color }}
              className="pointer"
              onMouseEnter={() => setActiveMonth(value)}
              onMouseLeave={() => setActiveMonth(undefined)}
            >
              {text}
            </div>
          ))}
          {(activeMonth >= 0) && users[activeMonth].map(user => <div>{user.firstName} {user.lastName}</div>)}
        </div>
      </div>
    </div>
  );
}

export default App;