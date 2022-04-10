import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 256px;
  width: 400px;
  text-align: center;

  opacity: 1;
  color: #2A474D;
  .learn-more {
    margin-top: 0.5rem;
    color: #00AECF;
    font-weight: 600;
    font-size: 16px;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
    font-size: 16px;
  }
`
const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  width: 100%;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  z-index: 20;
  width: 128px;
  height: 128px;
  overflow: hidden;
`
const InfoContainer = styled.div`
  height: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 24px #00000014;
  border-radius: 8px;
  width: 100%;
  font-family: 'Libre Franklin', sans-serif;
  .name {
    font-weight: 600;
    font-size: 16px;
  }
  .location {
    font-weight 400;
    font-size: 16px;
  }
  p {
    margin-left: 5px;
    margin-right: 5px;
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