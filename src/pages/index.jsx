import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import GridItem from '../components/GridItem';
import Calendar from '../images/phone.png';
import DataReport from '../images/data_report.svg';
import MayTheForce from '../images/may_the_force.svg';
import SploreGuide from '../images/sploreguide.png';
import Fishing from '../images/fishing.jpg';
import Climbing from '../images/climbing.jpg';
import Vid from '../components/Video';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import { color } from 'styled-system';

const Header = styled.header`
  width: 100%;
  position: absolute;
  padding: 0rem;
  top: 0px;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }

  img {
    width: 15%;
    margin-bottom: 0rem;
    padding-bottom: 0rem;
  }
`;

const Logo = styled.h2`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  padding: 0 1.75rem;
  margin-top: calc(60vw * (9/16));
  color: white;
  font-size: calc(1px + 3vw);
  margin-bottom: 3vmin;

`;

const Subtitle = styled.h4`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  text-align: left;
  padding: 0 0rem;
  color: white;
  font-family: ${props => props.theme.fontFamily.body};
  margin-top: 0rem;
  font-size: calc(1px + 1.5vw);
  font-weight: 400;
  margin-bottom: 3vmin;

`;

const Card = styled(Flex)`
background-image: url(https://a0.muscache.com/airbnb/static/launch_platform/experience-hosting-v2/HowAreExperiencesDifferent-43e4474869a718178f387868831339d1.jpg);
background-color: #eff0f4 !important;
    background-size: cover !important;
    padding: 15px !important;
    background-position: bottom !important;
    width: 100% !important;
    height: -webkit-calc(80vh) !important;
    height: -moz-calc(80vh) !important;
    height: calc(80vh) !important;
    max-height: -webkit-calc(100vw / 2 * 3) !important;
    max-height: -moz-calc(100vw / 2 * 3) !important;
    max-height: calc(100vw / 2 * 3) !important;
    position: relative !important;
    padding-left: 15px !important;
    padding-right: 15px !important;
    padding-top: 32px !important;
    text-align: center !important;
    overflow: scroll !important;
    p {
      margin: 8px !important;
    word-wrap: break-word !important;
    font-size: calc(3px + 1vw) !important;
    line-height: 26px !important;
    letter-spacing: normal !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    text-transform: undefined !important;
    color: #484848 !important;
    padding-top: 20px !important;
    padding-bottom: undefined !important;
    font-weight: 250;
    }
    h2 {
      color: inherit !important;
      font-size: calc(2px + 3vw) !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      margin: 15px !important;
      padding: 0px !important;
    }
`;

const Hero = styled(Flex)`
  height: 100%;
  position: absolute;
  text-align: center;
  align-content: center;
  align-items: center;
  width: 100%;


  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
    text-align: center;
    align-content: center;
    align-items: center;
    color: white
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {

    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {

    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};`;


const PrimaryBG = styled.section`
  background: #F8F9FA !important;
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const AltPrimaryBG = styled.section`
  background: #eff0f4 !important;
  margin: 0px;
  padding: 0px;
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const AltWrapper = styled(Flex)`
  box-sizing: border-box;
  margin: 0px !important;
  padding: 0px !important;
  // background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)) !important;
  max-width: ${props => props.theme.maxWidth};`;


  const AltServiceImage = styled.div`
  margin: 0px !important;
  padding: 0px !important;
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {

    img {
      width: 75%;
    }
  }
`;


const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin-bottom: 0rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {

    img {
      width: 75%;
    }
  }
`;
const AltServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  color: #484848 !important;
  margin: 0px !important;
  padding: 0px !important;
  justifyContent: center;
  align-self: center;
  align-items: center;
  h2 {
    color: #484848 !important
  }
  @media (max-width: ${props => props.theme.breakpoint.l})
  {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const ServiceText = styled.div`

  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  @media (max-width: ${props => props.theme.breakpoint.l})
  {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h4 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m})
  {
    font-size: 1.5rem;
  }
`;

const Started = styled(Wrapper)`
  margin: 0 auto;
  display: block;
  text-align: center !important;

  h1 {
    margin-bottom:40px;
  }
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h4 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m})
  {
    font-size: 1.5rem;
  }
`;

const Steps = styled(Wrapper)`
box-sizing: border-box;
margin-left: -8px !important;
margin-right: -8px !important;
display: block !important;

`
const Box = styled(Wrapper)`
padding-left: 8px !important;
    padding-right: 8px !important;
    min-height: 1px !important;
    position: relative !important;
    width: 33.33333333333333% !important;
    float: left !important;
    display: block !important;


`
const Circle = styled(Wrapper)`
border-radius: 50% !important;
    border: solid 2px #000000 !important;
    width: 48px !important;
    height: 48px !important;
    position: relative !important;
    left: 50% !important;
    -webkit-transform: translateX(-50%) !important;
    -ms-transform: translateX(-50%) !important;
    transform: translateX(-50%) !important;
    line-height: 45px !important;
    text-align: center !important;
    font-size: 18px !important;
    font-weight: bold !important;
    display: block;

`
const Major = styled(Wrapper)`
margin: 0px !important;
    word-wrap: break-word !important;
    font-size: 18px !important;
    line-height: 26px !important;
    letter-spacing: normal !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    text-transform: undefined !important;
    color: #484848 !important;
    padding-top: undefined !important;
    padding-bottom: undefined !important;
    font-weight: 800 !important;
    text-align: center !important;
    display: block;

`

const Text = styled(Wrapper)`
width: 100% !important;
font-size: calc(1px + 1.2vw);
padding-right: 24px !important;
padding-left: 24px !important;
text-align: center !important;

`


const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <React.Fragment>
  <Vid/>
    <Header>
     <img src={SploreGuide} />
      <Logo>Host unique adventures on SploreGuide
      <Subtitle>Earn money leading people on trips and activities you love</Subtitle>
      </Logo>
    </Header>
      <Card>
        <h2>What are SploreGuide Adventures?
        <p>
        SploreGuide Adventures are activities designed and led by inspiring locals. They go beyond typical tours or classes by immersing guests in each host’s unique world. It’s an opportunity for anyone to share their hobbies, skills, or expertise without needing an extra room.</p>
        </h2>
      </Card>

    <AltPrimaryBG>
    <AltWrapper flexDirection="column" p={4} mx="auto">
      <Flex w={1} py={0} flexWrap="wrap">
        <AltServiceImage>
          <img src={Fishing} />
        </AltServiceImage>
        <AltServiceText>
          <h2>Meet new people</h2>
          <p>
          Connect with a community of travelers and locals who share your interests. You might make a few new friends, learn from fellow enthusiasts, or get someone excited about a new hobby.
          </p>
        </AltServiceText>
      </Flex>
      <Flex w={1} py={2} flexDirection="row-reverse" flexWrap="wrap">
        <AltServiceImage>
          <img src={Climbing} alt="Data Report" />
        </AltServiceImage>
        <AltServiceText>
          <h2>Share your passion and hobbies with the world</h2>
          <p>
          Introduce guests to the activities and places you’re most passionate about. We’ll help you design your experience step by step, with plenty of resources along the way.
          </p>
        </AltServiceText>
      </Flex>
    </AltWrapper>
  </AltPrimaryBG>

    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={Calendar} alt="Calendar"
            />
          </ServiceImage>
          <ServiceText>
            <h2>Host on your terms</h2>
            <p>
            Set a schedule that works for you, whether you host daily, weekly, or monthly. Pick your price and group size, and manage all the details on the go with a convenient mobile app.
            </p>
          </ServiceText>
        </Flex>
        <Flex w={1} py={2} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap">
          <ServiceImage>
            <img src={DataReport} alt="Data Report" />
          </ServiceImage>
          <ServiceText>
            <h2>Start a business with no upfront costs</h2>
            <p>
            You’ll get your own page on SploreGuide that travelers can use to book your experience. SploreGuide handles payment processing, provides 24-hour customer service, and covers liability insurance.
            </p>
          </ServiceText>
        </Flex>
      </Wrapper>
    </PrimaryBG>
    <Started justifyContent="center" alignItems="center">
    <h1>How to Get Started</h1>
    <Steps>
    <Box>
    <Circle>1</Circle>
    <Major>Learn what we’re looking for</Major>
    <Text>Review our quality standards and see if your experience is a fit for SploreGuide.</Text>
    </Box>
    <Box>
    <Circle>2</Circle>
    <Major>Create your experience page</Major>
    <Text>Review our quality standards and see if your experience is a fit for SploreGuide.</Text>
    </Box>
    <Box>
    <Circle>3</Circle>
    <Major>Submit to SploreGuide for review</Major>
    <Text>Review our quality standards and see if your experience is a fit for SploreGuide.</Text>
    </Box>

    </Steps>
    </Started>

    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h1>Say hi!</h1>
      <h4>contact@SploreGuide.com</h4>
    </Contact>
    <Footer />
  </React.Fragment>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
