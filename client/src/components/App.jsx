import React, { useState, useEffect } from 'react';
import { Header, Users, Form, Footer } from '../layout/index';
import styled, { createGlobalStyle } from 'styled-components';

const axios = require('axios');

const Global = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
  `;

const MainContainer = styled.div`
  max-width: 120rem !important;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios('/users')
      .then((response) => {
        setUserList(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Global />
      <MainContainer>
        <Header />
        <Users users={userList} />
        <Form />
        <Footer />
      </MainContainer>
    </>
  );
};

export default App;
