import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import PostCard from "components/PostCard"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"

const BlogTitle = styled("h1")`
  margin-bottom: 1em;
`

const BlogGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`

const Blog = ({ posts, meta }) => (
  <>
    <Helmet
      title={`Blog | Juan Murillo`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Blog | Juan Murillo`,
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
          content: meta.image,
        },
        {
          property: `twitter:image`,
          content: meta.image,
        },
      ].concat(meta)}
    />
    <Layout>
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {posts.map((post, i) => (
          <PostCard
            key={i}
            author={post.node.data.post_author}
            category={post.node.data.post_category}
            title={post.node.data.post_title}
            date={post.node.data.post_date}
            description={post.node.data.post_preview_description}
            uid={post.node.uid}
          />
        ))}
      </BlogGrid>
    </Layout>
  </>
)

const Component = ({ data, location }) => {
  const { language } = useUpdateLanguage({ location });
  const posts = data.allPrismicPost.edges.filter(edge => edge.node.lang === language.current);
  const meta = data.site.siteMetadata
  if (!posts) return null

  return <Blog posts={posts} meta={meta} />
}
export default Component;

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    allPrismicPost(sort: {last_publication_date: DESC}) {
      edges {
        node {
          lang
          id
          data {
            post_author
            post_title {
              text
            }
            post_date(fromNow: true)
            post_category {
              text
            }
            post_preview_description {
              text
              richText
            }
          }
          uid
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
