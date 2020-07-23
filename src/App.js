import React, { useState, useEffect } from 'react';

import './index.scss';
import { monthOptions } from './config';
import { fetchUsers } from './services';
import avatarSrc from './assets/img/user.png';
import Button from './components/button/Button';

const App = () => {
  const [users, setUsers] = useState({});
  const [activeMonth, setActiveMonth] = useState(undefined);

  useEffect(() => {
    fetchUsers()
      .then(users => setUsers(users))
  }, []);

  const months = Object.keys(users).length
    ? monthOptions(users)
    : [];

  return (
    <div className="container" >
      <div className="row">
        <div className="col">
          {months.map(({ value, text, color }) => (
            <Button
              color={color}
              key={text}
              text={text}
              className="btn-sm shadow m-1"
              onMouseEnter={() => setActiveMonth(value)}
              onMouseLeave={() => setActiveMonth(undefined)}
            />
          ))}
          {(activeMonth >= 0) && (
            <ol>
              {users[activeMonth].map(({ id, firstName, lastName }) => (
                <li key={id}>
                  {firstName} {lastName}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;