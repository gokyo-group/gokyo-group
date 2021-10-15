import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
    title, 
    content, 
    contentComponent, 
    image1,
    image22,
    image33
   }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient"
    // style={{
    //   backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/8/89/Eye%27s_of_Buddha.jpg")`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center bottom",
    //   backgroundOpacity:'0.5'
    // }}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered">
                {title}
              </h1>
              <PageContent className="content has-text-centered" content={content} />
            </div>
            <hr />

            {/* <section className="section"> */}
            <div className="container has-text-centered">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">OUR PEOPLE</h2>

              <div className="columns is-centered" >

                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-2by2">
                        <img src={!!image1.childImageSharp ? image1.childImageSharp.fluid.src : image1} style={{ maxWidth: '100%' }} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">SABIN SHRESTHA</p>
                          <p className="subtitle is-6">DIRECTOR</p>
                        </div>
                      </div>

                      {/* <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">linkedIn/facebook/twitter</a>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-2by2">
                        <img src={!!image22.childImageSharp ? image22.childImageSharp.fluid.src : image22} style={{ maxWidth: '100%' }} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">SUJAN DEVKOTA</p>
                          <p className="subtitle is-6">CONSULTANT</p>
                        </div>
                      </div>
                      {/* <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">linkedIn/facebook/twitter</a>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-2by2">
                        <img src={!!image33.childImageSharp ? image33.childImageSharp.fluid.src : image33} style={{ maxWidth: '100%' }} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">SAKSHAM DEVKOTA</p>
                          <p className="subtitle is-6">CONSULTANT</p>
                        </div>
                      </div>
                      {/* <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">linkedIn/facebook/twitter</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image1: PropTypes.object,
  image22: PropTypes.object,
  image33: PropTypes.object
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image1={post.frontmatter.image1}
        image22={post.frontmatter.image22}
        image33={post.frontmatter.image33}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    title:PropTypes.string,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}


export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        image1 {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image22 {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image33 {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
      }
      
    }
  }
`
