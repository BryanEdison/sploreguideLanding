import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import GridItem from '../components/GridItem';
import Calendar from '../images/phone.png';
import DataReport from '../images/data_report.svg';
import MayTheForce from '../images/may_the_force.svg';
import Vid from '../components/Video';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';

const Header = styled.header`
  width: 100%;
  height: 600px;
  position: absolute;
  padding: 0rem;
  top: 0px;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
  color: white;
`;

const Subtitle = styled.h3`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  color: white;
  font-family: ${props => props.theme.fontFamily.body};
  margin-top: 9rem;
  font-size: 1.85rem;
  font-weight: 400;
`;

const Card = styled(Flex)`
background-image: url(https://a0.muscache.com/airbnb/static/launch_platform/experience-hosting-v2/HowAreExperiencesDifferent-43e4474869a718178f387868831339d1.jpg);
background-color: #eff0f4 !important;
    background-size: cover !important;
    padding: 24px !important;
    background-position: bottom !important;
    width: 100% !important;
    height: -webkit-calc(80vh) !important;
    height: -moz-calc(80vh) !important;
    height: calc(80vh) !important;
    max-height: -webkit-calc(100vw / 2 * 3) !important;
    max-height: -moz-calc(100vw / 2 * 3) !important;
    max-height: calc(100vw / 2 * 3) !important;
    position: relative !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
    padding-top: 32px !important;
    text-align: center !important;
    overflow: scroll !important;
    p {
      margin: 32px !important;
    word-wrap: break-word !important;
    font-size: 20px !important;
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
      font-size: 2em !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      margin: 20px !important;
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
  margin: 0 auto;
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

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <React.Fragment>
  <Vid />
    <Header>
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
    <Wrapper p={4} mb={[4, 4, 7]} mx="auto" justifyContent="space-between" flexWrap="wrap">
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          sizes={c.node.data.header_image.localFile.childImageSharp.sizes}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={Calendar} alt="Calendar" height= '650px' width='auto'
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
