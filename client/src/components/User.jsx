import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 16rem;
  width: 25rem;
  text-align: center;

  opacity: 1;
  color: #2A474D;
  .learn-more {
    margin-top: 0.5rem;
    color: #00AECF;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }
`
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  width: 100%;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  z-index: 20;
  width: 8rem;
  height: 8rem;
  overflow: hidden;
`
const InfoContainer = styled.div`
  height: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.1875rem 1.5rem #00000014;
  border-radius: 0.5rem;
  width: 100%;
  font-family: 'Libre Franklin', sans-serif;
  .name {
    font-weight: 600;
    font-size: 1rem;
  }
  .location {
    font-weight 400;
    font-size: 1rem;
  }
  p {
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }
  .name-location-header {
    margin-top: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    background-color: #00AECF;
    cursor: pointer;
    color: white;
    .learn-more {
      color: #fff;
    }
  }
`
const User = ({ firstName, lastName, age, city, street, avatar, country, email }) => (
  <UserContainer>
    <AvatarContainer>
      <ImageContainer>
        <img src={avatar}></img>
      </ImageContainer>
    </AvatarContainer>
    <InfoContainer>
      <div className='name-location-header'>
        <div className='name'>
          {firstName} {lastName}
        </div>
        <p>|</p>
        <div className='location'>
          {city}, {country}
        </div>
      </div>
      <div className='learn-more'>Learn More</div>
    </InfoContainer>
  </UserContainer>
);

export default User;