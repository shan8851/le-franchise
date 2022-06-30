import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { EarningPotential } from "./components/EarningPotential";
import { Features } from "./components/Features";
import { useState } from 'react';
import styled from 'styled-components'
import { breakpoints, colors } from "./helpers/globals";
import image from './assets/photo3.jpeg'

const SuccessContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SuccessImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 16px 0;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 8px 0;
  }
`;

const SuccessTitle = styled.h5`
  font-size: 24px;
  color: ${colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const SuccessText = styled.p`
  font-size: 20px;
  color: ${colors.white};
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;

export const App = () => {
  const [success, setSuccess] = useState(false);

  if (success)
    return (
      <SuccessContainer>
        <SuccessTitle>Thanks for your message</SuccessTitle>
        <SuccessImage src={image} />
        <SuccessText>
          Put your feet up, we will be in touch shortly.
        </SuccessText>
        <button onClick={() => setSuccess(false)}>go back</button>
      </SuccessContainer>
    );
  return (
    <div style={{ maxWidth: '100vw' }}>
      <Header />
      <Hero />
      <Features />
      <EarningPotential />
      <Form success={success} setSuccess={setSuccess} />
      <Footer />
    </div>
  );
};

export default App;
