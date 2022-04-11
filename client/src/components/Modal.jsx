import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const UserContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  height: 21.125rem;
  width: 25rem;
  text-align: center;

  opacity: 100%;
  color: #2a474d;
  .learn-more {
    margin-top: 0.5rem;
    color: #00aecf;
    font-weight: 600;
    font-size: 1rem;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }
`;
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
`;
const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.1875rem 1.5rem #00000014;
  border-radius: 0.5rem;
  width: 100%;
  font-family: 'Libre Franklin', sans-serif;
  .name {
    font-weight: 600;
    font-size: 1.5rem;
    color: #00AECF;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .location {
    font-weight 400;
    font-size: 1rem;
  }
  p {
    margin-left: 0.3125rem;
    margin-right: 0.3125rem;
  }
  .street {
    margin-bottom: 0.5rem;
  }
  .city-country {
    margin-bottom: 0.5rem;
  }
  .email:hover {
    cursor: pointer;
    color: #00AECF;
  }
  .age {
    margin-bottom: 1rem;
  }
  .phone {
    margin-bottom: 1rem;
  }
}
`;

const CloseIconContainer = styled.div`
  height: 1.5687rem;
  width: 1.5687rem;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  right: -1.5%;
  top: 17%;
  box-shadow: 0px 0px 3px #00000029;
  .fa-circle-xmark {
    color: #bbbbbb;
    z-index: 999;
    height: 1.7687rem;
    width: 1.7687rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .fa-circle-xmark:hover {
    color: #00aecf;
    cursor: pointer;
  }
`;

const Modal = ({
  firstName,
  lastName,
  age,
  city,
  streetName,
  streetNumber,
  avatar,
  country,
  email,
  phone,
}) => {
  return (
    <UserContainer>
      <CloseIconContainer>
        <FontAwesomeIcon icon={faCircleXmark} />
      </CloseIconContainer>
      <AvatarContainer>
        <ImageContainer>
          <img src={avatar}></img>
        </ImageContainer>
      </AvatarContainer>
      <InfoContainer>
        <div className='name'>
          {firstName} {lastName}
        </div>
        <div className='details'>
          <div className='age'>Age: {age}</div>
          <div className='street'>
            {streetNumber}, {streetName}
          </div>
          <div className='city-country'>
            {city}, {country}
          </div>
          <div className='phone'>{phone}</div>
          <div className='email'>{email}</div>
        </div>
      </InfoContainer>
    </UserContainer>
  );
};

export default Modal;
