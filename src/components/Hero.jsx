import ReactPlayer from "react-player";
import styled from "styled-components";
import image from "../assets/photo1.jpeg";
import { breakpoints, colors } from "../helpers/globals";

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <HeadingContent>
          <Heading>Franchises available now!</Heading>
          <HeaderText>
            Let's Eat has been developed from the ground up focussing on fantastic user experience and with the aim of disrupting the online food ordering industry. We offer some of the best rates in the industry and a fantastic loyalty scheme for our customers. We're currently expanding and have a number of fantastic franchise opportunities available throughout the UK.
          </HeaderText>
        </HeadingContent>
        <ImageWrapper>
          <Image src={image} />
        </ImageWrapper>

      </Container>
      <VideoWrapper>
        <ReactPlayer width={600} controls url='https://youtu.be/yjIk_DuGCWQ' />
      </VideoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  padding: 64px 32px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px 16px;
  }
`;

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
  margin-right: 64px;
  color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-right: unset;
  }
`;

const Heading = styled.h1`
  font-size: 28px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

const HeaderText = styled.p`
  font-size: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
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

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;

`;

