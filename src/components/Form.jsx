import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../helpers/globals";
import Chill from "../assets/chill.png";
export const Form = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  if (success)
    return (
      <SuccessContainer>
        <SuccessTitle>Thanks for your message</SuccessTitle>
        <SuccessImage src={Chill} />
        <SuccessText>
          Put your feet up, we will be in touch shortly.
        </SuccessText>
      </SuccessContainer>
    );

  return (
    <Wrapper>
      <Container>
        <Heading>For more information about franchise opportunities please fill out the form below.</Heading>
        <PartnerForm name="join" method="POST" action="/?success=true" netlify>
          <input type="hidden" name="form-name" value="join" />
          <FormRow>
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            <FormInput
              type="text"
              id="number"
              name="number"
              placeholder="Contact Number"
            />
          </FormRow>
          <FormRow>
            <FormTextarea
              type="text"
              id="message"
              name="message"
              placeholder="Message..."
              rows={10}
            />
          </FormRow>
          <Button type="submit">Submit</Button>
        </PartnerForm>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color:${colors.yellow};
  padding: 64px 32px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px 16px;
  }
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px 64px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px 32px 16px;
  }
`;

const Heading = styled.h3`
  font-size: 28px;
  color: ${colors.blue};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const PartnerForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const FormInput = styled.input`
  width: 46%;
  border: 1px solid ${colors.blue};
  padding: 16px;
  box-shadow: 5px 5px 9px -1px rgba(41, 50, 80, 0.64);
  background-color: #f6f6f7;
  color: ${colors.blue};

  :placeholder {
    color: ${colors.blue};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    margin: 8px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    margin: 8px 0;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  border: 1px solid ${colors.blue};
  padding: 16px;
  box-shadow: 5px 5px 9px -1px rgba(41, 50, 80, 0.64);
    background-color: #f6f6f7;
  color: ${colors.blue};

  :placeholder {
    color: ${colors.blue};
  }

    @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    margin: 8px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    margin: 8px 0;
  }
`;

const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.yellow};
  border: 1px solid ${colors.blue};
  padding: 16px 32px;
  font-size: 24px;
  margin-top: 16px;
  cursor: pointer;
  box-shadow: 5px 5px 9px -1px rgba(41, 50, 80, 0.64);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }

  :hover {
    color: ${colors.green};
  }
`;

const SuccessContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 32px 64px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px 32px 16px;
  }
`;

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
  color: ${colors.blue};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const SuccessText = styled.p`
  font-size: 20px;
  color: ${colors.blue};
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
`;
