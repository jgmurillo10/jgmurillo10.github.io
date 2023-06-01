import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Layout from "components/Layout"
import Newsletter from "../components/_ui/Newsletter"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"
import { useIntl } from "gatsby-plugin-intl";

const PostHeroContainer = styled("div")`
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3em;

  img {
    width: 100%;
  }
`

const PostHeroAnnotation = styled("div")`
  padding-top: 0.25em;

  h6 {
    text-align: right;
    color: ${colors.grey600};
    font-weight: 400;
    font-size: 0.85rem;
  }

  a {
    color: currentColor;
  }
`

const PostCategory = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: ${colors.grey600};

  h5 {
    margin-top: 0;
    margin-bottom: 1em;
  }
`

const PostTitle = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-top: 0;
  }
`

const PostBody = styled("div")`
  max-width: 550px;
  margin: 0 auto;

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const PostMetas = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const PostAuthor = styled("div")`
  margin: 0;
`

const PostDate = styled("div")`
  margin: 0;
`

const Post = ({ post, meta }) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Helmet
        title={`${post.post_title.text} | Blog`}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${post.post_title.text} | Blog`,
          },
          {
            property: `og:description`,
            content: meta.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: meta.author,
          },
          {
            name: `twitter:title`,
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
          {
            property: `og:image`,
            content: post.post_meta_image.url || meta.image,
          },
          {
            property: `twitter:image`,
            content: post.post_meta_image.url || meta.image,
          },
        ].concat(meta)}
      />
      <Layout>
        <PostCategory><PrismicRichText field={post.post_category.richText} /></PostCategory>
        <PostTitle><PrismicRichText field={post.post_title.richText} /></PostTitle>
        <PostMetas>
          <PostAuthor>{post.post_author}</PostAuthor>
          <PostDate>
            {post.post_date}
          </PostDate>
        </PostMetas>
        {post.post_hero_image && (
          <PostHeroContainer>
            <img src={post.post_hero_image.url} alt="bees" />
            <PostHeroAnnotation>
              <PrismicRichText field={post.post_hero_annotation.richText} />
            </PostHeroAnnotation>
          </PostHeroContainer>
        )}
        <PostBody><PrismicRichText field={post.post_body.richText} /></PostBody>
        <Newsletter
          body={formatMessage({ id: "newsletter" })}
        />
      </Layout>
    </>
  )
}

const Component = ({ data, location }) => {
  console.log('> from post ', {location})
  const { language } = useUpdateLanguage({ doc: data.prismicPost, location })
  const postContent = data.allPrismicPost.edges.find(edge => edge.node.lang === language.current)?.node.data;
  const meta = data.site.siteMetadata
  return <Post post={postContent} meta={meta} />
}

export default Component;

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  query PostQuery($uid: String) {
    allPrismicPost(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          id
          uid
          lang
          alternate_languages {
            lang
            document {
              ... on PrismicPost {
                url
              }
            }
          }
          data {
            post_author
            post_title {
              richText
              text
            }
            post_hero_annotation {
              richText
            }
            post_hero_image {
              url
            }
            post_meta_image {
              url
            }
            post_date(fromNow: true)
            post_category {
              richText
            }
            post_preview_description {
              text
            }
            post_body {
              richText
              text
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
