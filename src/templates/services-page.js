import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServicePageTemplate = ({
  image,
  title,
  content,
  contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient"
    >
      <div className="container">
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light has-text-centered">
          {title}
        </h1>
        <hr />
        <div className="columns">
          <div className="column is-7">
            <div className="section">
              <PageContent className="content" content={content} />
            </div>

          </div>

          <div className="column is-5">
            <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} style={{ maxWidth: '100%' }} />
          </div>

        </div>
        <hr />
      </div>
    </section>
  )
}

ServicePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicePage

export const aboutPageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
