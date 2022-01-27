import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { useHistory } from 'react-router-dom';

import Layout from '../components/Layout';
import NavbarComponent from '../components/NavbarComponent';
import SectorDisplay from '../components/SectorDisplay';
import "../components/homepage.sass";

export const HomePageTemplate = ({
  image,
  image12,
  image2,
  image3,
  title,
  mainpitch,
  homeRoute,
  constructionRoute,
  realestateRoute
}) => (
  <div className="content">
    {/* <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div> */}
    <section className="section section--gradient">
      <div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter homepage-main" onClick={homeRoute}>
            <img src={!!image12.image.childImageSharp ? image12.image.childImageSharp.fluid.src : image12.image} style={{maxWidth:'100%',margin:'auto', display:'block'}}/>
          </div>
        </div>
        <hr/>
        <div className="columns is-mobile">
          
          <div className="column homepage-org" onClick={realestateRoute}>
            <img src={!!image2.image.childImageSharp ? image2.image.childImageSharp.fluid.src : image2.image} style={{maxWidth:'100%',margin:'auto', display:'block'}}/>
          </div>

          <div className="column homepage-org" onClick={constructionRoute}>
            <img src={!!image3.image.childImageSharp ? image3.image.childImageSharp.fluid.src : image3.image} style={{maxWidth:'100%',margin:'auto', display:'block'}}/>
          </div>
        </div>
      </div>
    </section>
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

  const homeRoute = () =>{ 
    window.location.href = '/';
  }

  const constructionRoute = () =>{ 
    window.location.href = '/';
  }

  const realestateRoute = () =>{ 
    window.location.href = '/buy';
  }

  return (
    <div>
    {/* <NavbarComponent/> */}
    {/* <Layout> */}
      <HomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        image12={frontmatter.image12}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
        homeRoute={homeRoute}
        constructionRoute={constructionRoute}
        realestateRoute={realestateRoute}
      />
    {/* </Layout> */}
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
