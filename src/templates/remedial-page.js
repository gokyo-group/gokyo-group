import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const RemedialPageTemplate = ({
  image,
  title,
  content,
  blurb,
  image99,
  blurb99,
  image45,
  blurb45,
  image124,
  blurb124,
  blurbtitle,
  blurbparagraph,
  blurbtitle99,
  blurbparagraph99,
  blurbtitle45,
  blurbparagraph45,
  blurbtitle124,
  blurbparagraph124,
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
              <div className="content">
                <h2>
                  {blurbtitle}
                </h2>
                <h3>
                  {blurbparagraph}
                </h3>
                <div>
                  <ul>
                  {blurb.map(bullet => <li>{bullet}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-5">
            <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} style={{ maxWidth: '100%' }} />
          </div>

        </div>

        <div className="columns">
          <div className="column is-7">
            <div className="section">
              <div className="content">
                <h2>
                  {blurbtitle99}
                </h2>
                <h3>
                  {blurbparagraph99}
                </h3>
                <div>
                  <ul>
                  {blurb99.map(bullet => <li>{bullet}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-5">
            <img src={!!image99.childImageSharp ? image99.childImageSharp.fluid.src : image99} style={{ maxWidth: '100%' }} />
          </div>

        </div>

        <div className="columns">
          <div className="column is-7">
            <div className="section">
              <div className="content">
                <h2>
                  {blurbtitle124}
                </h2>
                <h3>
                  {blurbparagraph124}
                </h3>
                <div>
                  <ul>
                  {blurb124.map(bullet => <li>{bullet}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-5">
            <img src={!!image124.childImageSharp ? image124.childImageSharp.fluid.src : image124} style={{ maxWidth: '100%' }} />
          </div>

        </div>

        <div className="columns">
          <div className="column is-7">
            <div className="section">
              <div className="content">
                <h2>
                  {blurbtitle45}
                </h2>
                <h3>
                  {blurbparagraph45}
                </h3>
                <div>
                  <ul>
                  {blurb45.map(bullet => <li>{bullet}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-5">
            <img src={!!image45.childImageSharp ? image45.childImageSharp.fluid.src : image45} style={{ maxWidth: '100%' }} />
          </div>

        </div>

        
        <hr />
      </div>
    </section>
  )
}

RemedialPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  blurb: PropTypes.string
}

const RemedialPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RemedialPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        blurb={post.frontmatter.blurb}
        image99={post.frontmatter.image99}
        blurb99={post.frontmatter.blurb99}
        image45={post.frontmatter.image45}
        blurb45={post.frontmatter.blurb45}
        image124={post.frontmatter.image124}
        blurb124={post.frontmatter.blurb124}

        blurbtitle={post.frontmatter.blurbtitle}
        blurbparagraph={post.frontmatter.blurbparagraph}
        blurbtitle99={post.frontmatter.blurbtitle99}
        blurbparagraph99={post.frontmatter.blurbparagraph99}
        blurbtitle45={post.frontmatter.blurbtitle45}
        blurbparagraph45={post.frontmatter.blurbparagraph45}
        blurbtitle124={post.frontmatter.blurbtitle124}
        blurbparagraph124={post.frontmatter.blurbparagraph124}

      />
    </Layout>
  )
}

RemedialPage.propTypes = {
  data: PropTypes.object.isRequired,
}



export default RemedialPage

export const RemedialPageQuery = graphql`
  query RemedialPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurb
        blurbtitle
        blurbparagraph
        blurb99
        blurbtitle99
        blurbparagraph99
        image99 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurb45
        blurbtitle45
        blurbparagraph45
        image45 {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurb124
        blurbtitle124
        blurbparagraph124
        image124 {
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
