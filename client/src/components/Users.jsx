import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { User } from '../layout';

const UsersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UsersGridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 256px);
  gap: 20px;
`

const Users = ({ users }) => {
  return (
    <UsersContainer>
      <UsersGridContainer>
        {users.map((user, i) => (
          <User
            user={user}
            key={user.login.uuid}
            firstName={user.name.first}
            lastName={user.name.last}
            city={user.location.city}
            country={user.location.country}
            age={user.dob.age}
            email={user.email}
            street={user.location.street.number, user.location.street.name}
            avatar={user.picture.large}
          />
        ))}
      </UsersGridContainer>
    </UsersContainer>
  )
}

export default Users;