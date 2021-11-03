import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { useHistory } from 'react-router-dom';

import Layout from '../components/Layout';
import NavbarComponent from '../components/NavbarComponent';
import SectorDisplay from '../components/SectorDisplay';

export const HomePageTemplate = ({
  image,
  image12,
  image2,
  image3,
  title,
  mainpitch,
  aboutRoute,
  serviceRoute,
  portfolioRoute
}) => (
        <div className="container">
            hello
        </div>
)

HomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  image12: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const history = useHistory();

  const aboutRoute = () =>{ 
    window.location.href = '/about';
  }

  const serviceRoute = () =>{ 
    window.location.href = '/service';
  }

  const portfolioRoute = () =>{ 
    window.location.href = '/portfolio';
  }

  return (
    <div>
    {/* <NavbarComponent/> */}
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        image12={frontmatter.image12}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
        aboutRoute={aboutRoute}
        serviceRoute={serviceRoute}
        portfolioRoute={portfolioRoute}
      />
    </Layout>
    </div>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

// image1 {
        //   alt
        //   image {
        //     childImageSharp {
        //       fluid(maxWidth: 500, quality: 100) {
        //         ...GatsbyImageSharpFluid
        //       }
        //     }
        //   }
        // }

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image12 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        image2 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        image3 {
            alt
            image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        mainpitch {
          title
          description
        }
      }
    }
  }
`
