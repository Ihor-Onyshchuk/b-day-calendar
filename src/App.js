import React, { useState, useEffect } from 'react';

import './index.scss';
import { monthOptions } from './config';
import { fetchUsers } from './services';
import Button from './components/Button/Button.js';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';

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
          <section className="my-3">
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
              <ActiveUsersList
                users={users}
                activeMonth={activeMonth}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;