import LogoImage from "../assets/Lets Eat Secondry Logo Yellow.svg";
import styled from "styled-components";
import { colors } from "../helpers/globals";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={LogoImage} />
        <SocialBlock>
          FIND US ON |{" "}
          <SocialLink
            href="https://www.facebook.com/uk.lets.eat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook size={22} />
          </SocialLink>{" "}
          <SocialLink
            href="https://www.linkedin.com/company/lets-eat-uk/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={22} />
          </SocialLink>{" "}
          <SocialLink
            href="https://twitter.com/Lets_Eat_UK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter size={22} />
          </SocialLink>{" "}
          <SocialLink
            href="https://www.instagram.com/lets.eat.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={22} />
          </SocialLink>{" "}
        </SocialBlock>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: ${colors.blue};
  padding: 16px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;
const Logo = styled.img`
  height: 55px;
  width: auto;
`;

const SocialBlock = styled.p`
  margin: 0 0 0 8px;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.yellow};
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${colors.yellow};
  margin: 0;

  :hover {
    color: ${colors.green};
  }
`;
