import React from 'react';
import styled from 'styled-components';

import avatarSrc from '../../assets/img/user.png';

const StyledUserCard = styled.div`
  font-size: 1rem;
    padding: 10px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: space-center;
    border: 1px solid #f8f8f8;
    border-radius: 10px;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
  }

  .card-img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .card-text {
    font-weight: 500;
    letter-spacing: .5px;
  }
`;

const ActiveUsersList = ({ users, activeMonth }) => (
  <>
    {users[activeMonth].map(({ id, firstName, lastName, dob }) => (
      <StyledUserCard key={id}>
        <img
          src={avatarSrc}
          className="card-img"
          alt="user-avatar"
        />
        <div className="card-text">
          <div>
            {firstName} {lastName}
          </div>
          <div>
            day of birth: {new Date(dob).getDate()}
          </div>
        </div>
      </StyledUserCard>
    ))}
  </>
);

export default ActiveUsersList;