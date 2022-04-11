import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: relative;
  height: 17rem;
`;

const NameContainer = styled.div`
  height: 10.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #1A1353;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 600;
    font-size: 2rem;
  }
`;

const TradeMarkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.0625rem;
  width: 100%;
  background-color: #1A1353;
  p {
    font-size: 0.875rem;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
    color: #FFF;
  }
  .trademark-links {
    margin-left: 0.625rem;
  }
  a {
    color: #FFFFFF;
    margin-right: 0.3125rem;
    margin-left: 0.3125rem;
    text-decoration: underline;
  }
  a:hover {
    color: #00AECF;
  }
`

const Footer = () => (
  <FooterContainer>
    <NameContainer>
      <h2>Applicant's Name</h2>
    </NameContainer>
    <TradeMarkContainer>
      <p className='trademark'>
        © 2021 Field Service Holdings, LLC
        - Trademarks and brands are the property
        of their respective owners.
      </p>
      <p className='trademark-links'>
        <a href="#">
          Terms of Use
        </a>
        |
        <a href="#">
          Privacy Policy
        </a>
        |
        <a href="#">
          Accesibility Statement
        </a>
      </p>
    </TradeMarkContainer>
  </FooterContainer>
);

export default Footer;