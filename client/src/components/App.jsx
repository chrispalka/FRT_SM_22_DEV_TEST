import React, { useState, useEffect } from 'react';
import { Header, Users } from '../layout/index';
import styled from 'styled-components';

const axios = require('axios');

const MainContainer = styled.div`
  max-width: 1920px !important;
  margin-left: auto;
  margin-right: auto;
`;


const App = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    axios('/users')
      .then((response) => {
        setUserList(response.data.results)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <MainContainer>
      <Header />
      <Users users={userList} />
    </MainContainer>
  )
}

export default App;