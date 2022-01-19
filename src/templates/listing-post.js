//post display which will be similar to blog post display
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
// import {FacebookShareButton, FacebookMessengerShareButton, WhatsappShareButton, EmailShareButton} from 'react-share';
// import {FacebookIcon, FacebookMessengerIcon, WhatsappIcon, EmailIcon} from 'react-share';
// import { useLocation } from '@reach/router';
import LayoutRealEstate from '../components/LayoutRealEstate';
import Content, { HTMLContent } from '../components/Content';
import SlickImageSlider from '../components/SlickImageSlider';
import ListingInfo from '../components/ListingInfo';

export const ListingPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  info,
  imageListId,
  featuredpost
}) => {
  const PostContent = contentComponent || Content
  // const [location, setLocation] = useState("https://gokyogroup.com/");

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <SlickImageSlider imageListId={imageListId}/>
            <ListingInfo info={info}/>
            <br/>
            <div className='container is-italic'>
              <PostContent content={content} />
            </div>
            <div style={{ marginTop: `4rem` }}>
                <h4>Share on Social Media:</h4>
                {/* <FacebookShareButton url={useLocation().href}>
                  <FacebookIcon size={36} round={true}/>
                </FacebookShareButton>
                <FacebookMessengerShareButton url={useLocation().href}>
                  <FacebookMessengerIcon size={36} round={true}/>
                </FacebookMessengerShareButton>
                <WhatsappShareButton url={useLocation().href}>
                  <WhatsappIcon size={36} round={true}/>
                </WhatsappShareButton>
                <EmailShareButton url={useLocation().href}>
                  <EmailIcon size={36} round={true}/>
                </EmailShareButton> */}
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ListingPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const ListingPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <LayoutRealEstate>
      <ListingPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Buy | Listing">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        info={post.frontmatter.info}
        imageListId={post.frontmatter.imageListId}
        featuredpost={post.frontmatter.featuredpost}
      />
    </LayoutRealEstate>
  )
}

ListingPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ListingPost

export const pageQuery = graphql`
  query ListingPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        info {
          location
          type
          bedroom
          bathroom
          floor
          landsize
          price
        }
        featuredpost
        imageListId
      }
    }
  }
`
