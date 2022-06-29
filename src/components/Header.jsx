import hero from "../assets/hero.jpeg";
import styled from "styled-components";
export const Header = () => {
  return (

    <HeaderBar src={hero} />

  );
};



const HeaderBar = styled.img`
  height: auto;
  width: 100vw;
`;

