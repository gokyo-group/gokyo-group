import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { useHistory } from 'react-router-dom';

import Layout from '../components/Layout';
import NavbarComponent from '../components/NavbarComponent';
import SectorDisplay from '../components/SectorDisplay';

export const IndexPageTemplate = ({
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
          <section className="hero">
            <figure className="image">
              <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} style={{maxWidth:'100%'}}/>
            </figure>
          </section>

          <section className="section">
            <div className="container">
                <div className="columns">
                  <div className="column is-one-quarter">
                    <div className="content">
                      <div className="content">
                        <div className="tile">
                          <h1 className="title is-size-1">{mainpitch.title}</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="content">
                      <div className="content">
                        <div className="tile">
                          <h3 className="subtitle">{mainpitch.description}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          <section className="section section--gradient">
          <div className="container has-text-centered">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
                <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!image12.image.childImageSharp ? image12.image.childImageSharp.fluid.src : image12.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={aboutRoute}>
                    <div id="textHover"><h1 className="has-text-white">{image12.alt}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                  <img src={!!image2.image.childImageSharp ? image2.image.childImageSharp.fluid.src : image2.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={serviceRoute}>
                    <div id="textHover"><h1 className="has-text-white">{image2.alt}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!image3.image.childImageSharp ? image3.image.childImageSharp.fluid.src : image3.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={portfolioRoute}>
                    <div id="textHover"><h1 className="has-text-white">{image3.alt}</h1></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
          </section>
          <hr/>
          <SectorDisplay/>
    </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  image12: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const history = useHistory();

  const aboutRoute = () =>{ 
    history.push("/about");
  }

  const serviceRoute = () =>{ 
    history.push("/service");
  }

  const portfolioRoute = () =>{ 
    history.push("/portfolio");
  }

  return (
    <div>
    {/* <NavbarComponent/> */}
    <Layout>
      <IndexPageTemplate
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

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
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
