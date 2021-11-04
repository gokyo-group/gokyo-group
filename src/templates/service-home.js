import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ServiceHomePageTemplate = ({
  image,
  title,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  pmRoute,
  constructRoute,
  designRoute,
  remedialRoute,
  facilitiesmanageRoute,
  valuationRoute
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
                    <img src={!!service1.image.childImageSharp ? service1.image.childImageSharp.fluid.src : service1.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={pmRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{service1.title}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                  <img src={!!service2.image.childImageSharp ? service2.image.childImageSharp.fluid.src : service2.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={constructRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{service2.title}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!service3.image.childImageSharp ? service3.image.childImageSharp.fluid.src : service3.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={designRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{service3.title}</h1></div>
                  </div>
                </div>
              </div>

            </div>
            <div className="columns is-centered">
              <div className="column">
                <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!service4.image.childImageSharp ? service4.image.childImageSharp.fluid.src : service4.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={remedialRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{service4.title}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                  <img src={!!service5.image.childImageSharp ? service5.image.childImageSharp.fluid.src : service5.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={facilitiesmanageRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{service5.title}</h1></div>
                  </div>
                </div>
              </div>

              <div className="column">
              <div className="hover01 simplecontainer">
                  <figure className="mb-0 m-0 mt-0 mr-0 ml-0">
                    <img src={!!service6.image.childImageSharp ? service6.image.childImageSharp.fluid.src : service6.image} style={{maxWidth:'100%'}}/>
                  </figure>
                  <div className="overlay" onClick={valuationRoute}>
                    <div id="textHover"><h1 className="has-text-white" style={{ textShadow:'1px 1px 2px black, 0 0 25px red, 0 0 5px black'}}>{service6.title}</h1></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
      </section>
  </div>
)

ServiceHomePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const ServiceHomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const pmRoute = () =>{ 
    window.location.href = '/projectmanagement';
  }

  const constructRoute = () =>{ 
    window.location.href = '/construction';
  }

  const designRoute = () =>{ 
    window.location.href = '/design';
  }

  const remedialRoute = () =>{ 
    window.location.href = '/remedial';
  }

  const facilitiesmanageRoute = () =>{ 
    window.location.href = '/facilitiesmanagement';
  }

  const valuationRoute = () =>{ 
    window.location.href = '/valuation';
  }

  return (
    <Layout>
      <ServiceHomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        service1={frontmatter.service1}
        service2={frontmatter.service2}
        service3={frontmatter.service3}
        service4={frontmatter.service4}
        service5={frontmatter.service5}
        service6={frontmatter.service6}
        pmRoute={pmRoute}
        constructRoute={constructRoute}
        designRoute={designRoute}
        remedialRoute={remedialRoute}
        facilitiesmanageRoute={facilitiesmanageRoute}
        valuationRoute={valuationRoute}
      />
    </Layout>
  )
}

ServiceHomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServiceHomePage

export const ServiceHomePageQuery = graphql`
  query ServiceHomePage($id: String!) {
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
        service1 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        service2 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        service3 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        service4 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        service5 {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        service6 {
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
