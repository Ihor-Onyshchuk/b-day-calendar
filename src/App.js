import React, { useState, useEffect } from 'react';

import { monthOptions } from './config';
import { fetchUsers } from './services';
import MonthsList from './components/MonthsList/MonthsList';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';

import './index.scss';

const App = () => {
  const [users, setUsers] = useState({});
  const [activeMonth, setActiveMonth] = useState(undefined);

  useEffect(() => {
    fetchUsers()
      .then(users => setUsers(users))
  }, []);

  const hasData = () => !!Object.keys(users).length;

  return (
    <div className="container" >
      <h1 className="my-2">User Info</h1>
      <hr />
      <div className="row">
        <div className="col">
          <h2>Calendar of users birthday</h2>
          <section className="d-flex flex-wrap justify-content-between my-3">
            {hasData() && (
              <MonthsList
                months={monthOptions(users)}
                onMouseEnter={setActiveMonth}
                onMouseLeave={setActiveMonth}
              />
            )
            }
          </section>
          <h2>Users List</h2>
          <section className="d-flex flex-wrap my-3">
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
  )
};

export default App;