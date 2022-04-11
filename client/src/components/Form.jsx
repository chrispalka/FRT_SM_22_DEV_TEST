import React, { useState } from 'react';
import Select from 'react-select'
import styled from 'styled-components';



const FormContainer = styled.div`
  background-color: #F7F7F9;
  height: 41rem;
  margin-top: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormFlexContainer = styled.div`
  height: 31rem;
  display: flex;
  align-items: center;
  padding-left: 21rem;
  padding-right: 21rem;
`;

const FormHeaderText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 3.25rem;
  color: #1A1353;
`;

const FormBodyText = styled.h1`
  color: #2A474D;
  font-size: 1.125rem;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 400;
`

const HeadingContainer = styled.div`
  width: 37.5rem
`;

const FormSubmitContainer = styled.div`
  height: 31rem;
  width: 41rem;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0rem 0.1875rem 1.125rem #00000014;
  border-radius: 0.1875rem;
  opacity: 1;
  `;

const FormGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 2.8125rem);
  gap: 1.5625rem;
  padding: 3.125rem 3.125rem 1.25rem 3.125rem;
  input, select {
    font-size: 1rem;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.0625rem solid #D0D0D0;
    letter-spacing: 0rem;
    opacity: 1;
  }
  input {
    color: #2A474D;
    padding: 0.625rem 0.9375rem;
  }
  input::placeholder {
    color: #A2A2A2;
  }
  select {
    padding: 0.625rem;
  }
  input:focus {
    outline: #66C4AB solid 0.125rem;
  }
`;

const SelectContainer = styled.div`
  padding: 0 3.125rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5625rem 7.5rem;
  p {
    color: #2A474D;
    font-size: 1rem;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
  }
  div {
    display: flex;
    align-items: center;
  justify-content: center;
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    font: inherit;
    width: 1.25rem;
    height: 1.25rem;
    border: 0.0625rem solid #D0D0D0;
    border-radius: 0;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    opacity: 0;
    background-color: #66C4AB;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
    transition: opacity 0.5s;
    opacity: 5;
  }

`
const SendInfoButtonContainer = styled.div`
  display: flex;
  padding: 0 3.125rem;
  align-items: center;
  justify-content: center;
`

const SendInfoButton = styled.button`
  height: 3.4375rem;
  width: 100%;
  background-color: #66C4AB;
  border-width: 0;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition-duration: 0.5s;
  :hover {
    background-color: #52a891;
  }
`;

const options = [
];

const customStyles = {
  placeholder: (provided, state) => ({
    ...provided,
    color: '#A2A2A2',
  }),
  // the select box
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused && "#66C4AB",
    borderColor: state.isFocused && "#66C4AB",
    border: state.isFocused ? '0.125rem solid #66C4AB' : '0.0625rem solid #D0D0D0',
    borderRadius: 0,
    minHeight: 45,
    paddingLeft: 5,
    cursor: "pointer",
    fontFamily: 'Libre Franklin',
    "&:hover": {
      border: '0.125rem solid #66C4AB',
      boxShadow: 'none'
    }
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: 1,
    marginBottom: 0,
    fontFamily: 'Libre Franklin',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    paddingBottom: 0,
    paddingTop: 0,
    color: '#2A474D'
  }),
}

const Form = () => {
  const [isYesChecked, setIsYesChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);

  const handleOnClick = (check) => {
    if (check === 'yes') {
      setIsYesChecked(!isYesChecked);
      setIsNoChecked(false)
    } else if (check === 'no') {
      setIsNoChecked(!isNoChecked)
      setIsYesChecked(false);
    }
  }
  return (
    <FormContainer>
      <FormFlexContainer>
        <HeadingContainer>
          <FormHeaderText>
            We Are Looking Forward To Working With You
          </FormHeaderText>
          <FormBodyText>
            Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor
            invidunt ut labore et dolore
            magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea
            takimata sanctus est.
          </FormBodyText>
        </HeadingContainer>
        <FormSubmitContainer>
          <FormGrid>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="text" placeholder='Company Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone' />
            <Select
              styles={customStyles}
              options={options}
              placeholder={'Industry'}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </FormGrid>
          <SelectContainer>
            <Select
              styles={customStyles}
              options={options}
              placeholder={'Position Applying For'}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </SelectContainer>
          <CheckBoxContainer>
            <div>
              <p>Are you located in the United States?</p>
            </div>
            <div>
              <p>Yes</p>
              <input type="checkbox" className='checked' onChange={() => handleOnClick('yes')} checked={isYesChecked} />
            </div>
            <div>
              <p>No</p>
              <input type="checkbox" className='checked' onChange={() => handleOnClick('no')} checked={isNoChecked} />
            </div>
          </CheckBoxContainer>
          <SendInfoButtonContainer>
            <SendInfoButton>
              Send Info
            </SendInfoButton>
          </SendInfoButtonContainer>
        </FormSubmitContainer>
      </FormFlexContainer>
    </FormContainer>
  )
};

export default Form;