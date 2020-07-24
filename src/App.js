import React, { useState, useEffect } from 'react';

import './index.scss';
import { monthOptions } from './config';
import { fetchUsers } from './services';
import Button from './components/Button/Button.js';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';
import MonthsList from './components/MonthsList/MonthsList';

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
      <div className="row">
        <div className="col">
          <section className="">
            {hasData() && (
              <MonthsList
                months={monthOptions(users)}
                onMouseEnter={setActiveMonth}
                onMouseLeave={setActiveMonth}
              />
            )
            }
          </section>
          <section className="d-flex flex-wrap">
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