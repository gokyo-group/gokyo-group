import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PortfolioHomePageTemplate = ({
    image,
    title,
    portfolio1,
    portfolio2,
    portfolio3,
    futureRoute,
    projectListRoute,
    galleryRoute
}) => (
  <div className="content">
    <div
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
    </div>
    <section className="section section--gradient">
        <div className="container has-text-centered">
          <div className="content">
          {/* <div class="columns is-mobile is-centered is-vcentered">
            <div class="column is-one-third">
              <img src={!!service1.image.childImageSharp ? service1.image.childImageSharp.fluid.src : service1.image} style={{maxWidth:'100%'}}/>
            </div>
            <div class="column">
              <span class="title"><a href="/projectmanagement">{service1.title}</a></span><br/>
            </div>
          </div> */}
            <div className="columns is-centered">
              <div className="column">
                <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!portfolio1.image.childImageSharp ? portfolio1.image.childImageSharp.fluid.src : portfolio1.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={futureRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{portfolio1.title}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                  <img src={!!portfolio2.image.childImageSharp ? portfolio2.image.childImageSharp.fluid.src : portfolio2.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={projectListRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{portfolio2.title}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!portfolio3.image.childImageSharp ? portfolio3.image.childImageSharp.fluid.src : portfolio3.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={galleryRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{portfolio3.title}</h1></div>
                  </div>
                </div>
              </div>

            </div>
            
          </div>
          </div>
      </section>
  </div>
)

PortfolioHomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const PortfolioHomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const futureRoute = () =>{ 
    window.location.href = '/products';
  }

  const projectListRoute = () =>{ 
    window.location.href = '/products';
  }

  const galleryRoute = () =>{ 
    window.location.href = '/products';
  }

  return (
    <Layout>
      <PortfolioHomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        portfolio1={frontmatter.portfolio1}
        portfolio2={frontmatter.portfolio2}
        portfolio3={frontmatter.portfolio3}
        futureRoute={futureRoute}
        projectListRoute={projectListRoute}
        galleryRoute={galleryRoute}
      />
    </Layout>
  )
}

PortfolioHomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PortfolioHomePage

export const PortfolioHomePageQuery = graphql`
  query PortfolioHomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        portfolio1 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        portfolio2 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        portfolio3 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

      }
    }
  }
`
