import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import SectorDisplay from '../components/SectorDisplay'

export const IndexPageTemplate = ({
  image,
  image1,
  image2,
  image3,
  title,
  mainpitch,
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
            <div className="columns is-centered is-mobile">
              <div className="column">
                <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!image1.image.childImageSharp ? image1.image.childImageSharp.fluid.src : image1.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay">
                    <div id="textHover"><h1 className="has-text-white">{image1.alt}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                  <img src={!!image2.image.childImageSharp ? image2.image.childImageSharp.fluid.src : image2.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay">
                    <div id="textHover"><h1 className="has-text-white">{image2.alt}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!image3.image.childImageSharp ? image3.image.childImageSharp.fluid.src : image3.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay">
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
  image1: PropTypes.object,
  image2: PropTypes.object,
  image3: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        image1={frontmatter.image1}
        image2={frontmatter.image2}
        image3={frontmatter.image3}
      />
    </Layout>
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

        image1 {
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
