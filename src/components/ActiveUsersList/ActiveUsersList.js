import React from 'react';

const ActiveUsersList = ({ users, activeMonth }) => (
  <>
    {
      <ol>
        {users[activeMonth].map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ol>
    }
  </>
)

export default ActiveUsersList;