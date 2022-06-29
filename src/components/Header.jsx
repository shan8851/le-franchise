import hero from "../assets/hero.jpeg";
import styled from "styled-components";
export const Header = () => {
  return (
    <Container>
      <HeaderBar src={hero} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vh;
`

const HeaderBar = styled.img`
  height: auto;
  width: 100vw;
`;

