import React, { useEffect } from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../helpers/globals";
export const Form = ({ setSuccess }) => {

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, [setSuccess]);


  return (
    <Wrapper>
      <Container>
        <Heading>For more information about franchise opportunities please fill out the form below.</Heading>
        <PartnerForm name="join" method="POST" action="/?success=true" netlify>
          <input type="hidden" name="form-name" value="franchise" />
          <FormRow>
            <FormInput
              type="name"
              id="name"
              name="name"
              placeholder="Name"
            />
            <FormInput
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />

          </FormRow>
          <FormRow>
            <FormInput
              type="number"
              id="number"
              name="number"
              placeholder="Contact Number"
            />
            <FormInput
              type="text"
              id="methodOfContact"
              name="methodOfContact"
              placeholder="Preferred method of contact"
            />
          </FormRow>
          <FormRow>
            <FormTextarea
              type="text"
              id="address"
              name="address"
              placeholder="Your address"
              rows={5}
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
      padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    margin: 8px 0;
      padding: 6px;
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
    padding: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    padding: 12px;
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
    font-size: 16px;
  }

  :hover {
    color: ${colors.green};
  }
`;

