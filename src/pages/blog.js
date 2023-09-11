import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import PostCard from "components/PostCard"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"
import { Head as HeadBase } from "../components/Head"

const BlogTitle = styled("h1")`
  margin-bottom: 1em;
`

const BlogGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5em;

  @media (max-width: 1050px) {
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }
`

export const Head =  () => <HeadBase title="Blog | Juan Murillo" />

const Blog = ({ posts }) => (
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
)

const Component = ({ data, location }) => {
  const { language } = useUpdateLanguage({ location });
  const posts = data.allPrismicPost.edges.filter(edge => edge.node.lang === language.current);
  if (!posts) return null

  return <Blog posts={posts} />
}
export default Component;

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
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
  }
`
