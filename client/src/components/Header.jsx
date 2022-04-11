import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Images/logo.png'


const HeaderContainer = styled.div`
  height: 44rem;
`;

const TopHeaderLogo = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0rem 0.1875rem 1.125rem #00000014;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
  padding-right: 11rem;
  padding-left: 11rem;
`;

const BackgroundHeaderContainer = styled.div`
  height: 16rem;
  background-color: #1A1353;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundHeaderText = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  font-size: 4rem;
  color: white;
`;

const BodyHeaderContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 21.6rem;
`;

const BodyHeaderText = styled.h2`
  font-family: 'Fira Sans', sans-serif;
  font-size: 3rem;
  color: #1A1353;
`;

const BodyHeaderSubTextContainer = styled.div`
  margin-left: 30rem;
  margin-right: 30rem;
`

const BodyHeaderSubText = styled.h1`
  color: #2A474D;
  font-size: 1.125rem;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 400;
`;

const LogoContainer = styled.div`
`;

const ContactContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-flow: row;
align-items: center;
`;

const TeleContainer = styled.div`
h1 {
  color: #1A1353;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`
const ContactButtonContainer = styled.div`
  margin-left: 1.5rem;
`

const ContactButton = styled.button`
  height: 3.4375rem;
  width: 8.75rem;
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

// .flagged-check:checked {
//   background-color: #2C9DDB !important;
// }

// .flagged-junk:focus {
//   box-shadow: none !important;
// }



const Header = () => (
  <HeaderContainer>
    <TopHeaderLogo>
      <LogoContainer>
        <a href='https://www.fieldroutes.com/' target={'_blank'}>
          <img src={logo} height="32" />
        </a>
      </LogoContainer>
      <ContactContainer>
        <TeleContainer>
          <h1>(888) 888-8888</h1>
        </TeleContainer>
        <ContactButtonContainer>
          <ContactButton>
            Contact Us
          </ContactButton>
        </ContactButtonContainer>
      </ContactContainer>
    </TopHeaderLogo>
    <BackgroundHeaderContainer>
      <BackgroundHeaderText>
        FieldRoutes Sales & Marketing Dev Test
      </BackgroundHeaderText>
    </BackgroundHeaderContainer>
    <BodyHeaderContainer>
      <BodyHeaderText>
        This is body content, specifically an h2
      </BodyHeaderText>
      <BodyHeaderSubTextContainer>
        <BodyHeaderSubText>
          FieldRoutes is a Cloud-based and mobile SaaS provider for field service businesses.
          The platform automates all aspects of field service operations for enterprise and
          small business customers that span office management, advanced route optimization,
          payment processing, digital sales, marketing, and customer acquisition solutions that
          accelerate growth, streamline operations, increase customer retention, and maximize revenue.
        </BodyHeaderSubText>
      </BodyHeaderSubTextContainer>
    </BodyHeaderContainer>
  </HeaderContainer>
)

export default Header;