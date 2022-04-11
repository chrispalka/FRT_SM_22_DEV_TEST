import React, { useState } from 'react';
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
  grid-template-rows: repeat(3, 16rem);
  gap: 1.25rem;
  @media (max-width:1000px) {
    display: block;
  }

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
            phone={user.phone}
            email={user.email}
            streetName={user.location.street.name}
            streetNumber={user.location.street.number}
            avatar={user.picture.large}
          />
        ))}
      </UsersGridContainer>
    </UsersContainer>
  )
}

export default Users;