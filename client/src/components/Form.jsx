import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #F7F7F9;
  height: 656px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormFlexContainer = styled.div`
  height: 496px;
  display: flex;
  align-items: center;
  padding-left: 21rem;
  padding-right: 21rem;
`;

const FormHeaderText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 52px;
  color: #1A1353;

`;

const HeadingContainer = styled.div`
  width: 600px
`;

const FormSubmitContainer = styled.div`
  height: 496px;
  width: 656px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 18px #00000014;
  border-radius: 3px;
  opacity: 1;
`;

const Form = () => (
  <FormContainer>
    <FormFlexContainer>
      <HeadingContainer>
        <FormHeaderText>
          We Are Looking Forward To Working With You
        </FormHeaderText>
      </HeadingContainer>
      <FormSubmitContainer>
        <h1>bye</h1>
      </FormSubmitContainer>
    </FormFlexContainer>
  </FormContainer>
);

export default Form;