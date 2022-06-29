import styled from "styled-components";
import image from "../assets/money.jpeg";
import { breakpoints, colors } from "../helpers/globals";

export const EarningPotential = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <HeadingContent>
        <Heading>Earning Potential</Heading>
        <HeaderText>
          What you can earn out of Let’s Eat Franchise is, in the final analysis, up to you: how hard you work, and how gifted you are. It’s no different to anything else. But you’ll be surprised at how the numbers can stack up.
        </HeaderText>
        <Grid>
          <GridHeader />
          <GridHeader>Year 1</GridHeader>
          <GridHeader>Year 2</GridHeader>
          <GridHeader>Year 3</GridHeader>
          <GridHeader>Income</GridHeader>
          <GridItem>£203,840</GridItem>
          <GridItem>£535,080</GridItem>
          <GridItem>£1,426,880</GridItem>
          <GridHeader>Expenditure</GridHeader>
          <GridItem>£25,000</GridItem>
          <GridItem>£30,000</GridItem>
          <GridItem>£35,000</GridItem>
          <GridHeader>Profit</GridHeader>
          <GridItem>£178,840</GridItem>
          <GridItem>£505,080</GridItem>
          <GridItem>£1,391,880</GridItem>
        </Grid>
        <HeaderText>
          Interested? Simply enter your details in the form below or give us a call on{" "}
          <ActionLink href="tel:44330133432">0330 133 4342 </ActionLink>and hit
          option 1 for sales and we can provide you with any more information you might need.
        </HeaderText>
      </HeadingContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 64px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 32px 16px;
    flex-direction: column-reverse;
  }
`;

const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 64px;
  color: ${colors.blue};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-left: unset;
  }
`;

const Heading = styled.h1`
  font-size: 28px;
   color: ${colors.yellow};
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const HeaderText = styled.p`
  font-size: 20px;
 color: ${colors.white};
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ActionLink = styled.a`
  color: ${colors.yellow};

    @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;


export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
`

export const GridHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding: 8px;
  color: ${colors.yellow};
   @media (max-width: ${breakpoints.mobile}) {
    padding: 4px;
    font-size: 12px;
  }
`

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding: 8px;
    color: ${colors.white};

       @media (max-width: ${breakpoints.mobile}) {
    padding: 4px;
    font-size: 12px;
  }
`


