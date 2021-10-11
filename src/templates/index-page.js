import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

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
            <div className="columns is-centered">
              <div className="column">
                <div className="hover07 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src="https://unsplash.it/300/200/?random&pic=1" className="image"/>
                  </figure>
                  <div className="overlay">
                    <div id="textHover"><h1 className="has-text-white">About Us</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover07 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src="https://unsplash.it/300/200/?random&pic=2" className="image"/>
                  </figure>
                  <div className="overlay">
                    <div id="textHover"><h1 className="has-text-white">Services</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover07 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src="https://unsplash.it/300/200/?random&pic=3" className="image"/>
                  </figure>
                  <div className="overlay">
                    <div id="textHover"><h1 className="has-text-white">Portfolio</h1></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
          </section>
      </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        image3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
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
