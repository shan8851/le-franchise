import styled from "styled-components";
import { breakpoints, colors } from "../helpers/globals";
import Image1 from "../assets/software.jpeg";
import Image2 from "../assets/support.jpeg";
import Image3 from "../assets/team.jpeg";
export const Features = () => {
  return (
    <Wrapper>
      <Container>
        <Item>
          <ItemImage src={Image1} />
          <ItemHeading>Cutting Edge Software</ItemHeading>
          <ItemText>
            Let's Eat has invested time and money into creating cutting edge
            software that will run seamlessly on any device. Your customers will
            love it. They'll save time and money with our unique rewards scheme
            - Tasty Points. Seamless repeat ordering and multiple saved
            locations for delivery. Our fantastic commission rates make Let's Eat very attractive to restaurants. That coupled with our proven sales techniques will make onboarding new restaurants a breeze.
          </ItemText>
        </Item>
        <Item>
          <ItemImage src={Image2} />
          <ItemHeading>Ongoing Support</ItemHeading>
          <ItemText>
            As a franchisee, you will receive valuable, ongoing business support, including site selection, training, marketing, new technology and more. We will assist you in developing a business plan, in learning the best ways to hire and manage personnel, and in how to profitably manage your facility. This is in addition to a comprehensive training programme to get you started. From there we are available for regular support and check-ins via zoom. Let's Eat will provide you with regular marketing materials for you to use and will run a continuous national advertising campaign alongside your marketing efforts.
          </ItemText>
        </Item>
        <Item>
          <ItemImage src={Image3} />
          <ItemHeading>Our Promise To You</ItemHeading>
          <ItemText>
            Everyone working for Let’s Eat is an important player on the team. We believe in building personal professional relationships with our customers and being polite and helpful at all times. We must make it easy for people to do business with us. As a Franchisee you buy the right to develop your business in a defined geographical area, with a guarantee from Let’s Eat of no Let’s Eat competitor in that area. Franchisees can offer their Clients the full breadth of Let’s Eat expertise, all supported by the full span of our capabilities.
          </ItemText>
        </Item>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f6f6f7;
  padding: 64px 32px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px 16px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const ItemHeading = styled.h5`
  font-size: 28px;
  color: ${colors.blue};
  text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const ItemText = styled.p`
  font-size: 16px;
  color: ${colors.blue};
  text-align: center;
    @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;
