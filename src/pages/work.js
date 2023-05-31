import React, { useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import Button from "components/_ui/Button"

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
`

const Work = ({ projects, meta }) => {
  // TODO(jgmurillo10): Implement this.
  const [logged] = useState(false)

  return (
    <>
      <Helmet
        title={`Work | Juan Murillo`}
        // titleTemplate={`%s | Work | Juan Murillo`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `Work | Juan Murillo`,
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
        <a
          href="https://forms.gle/x75wbdTKjTZqpywD6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>View private projects</Button>
        </a>
        <WorkTitle>Work</WorkTitle>
        <>
          {projects
            .filter(project => logged || project.node.data.project_is_public)
            .map((project, i) => (
              <ProjectCard
                key={i}
                category={project.node.data.project_category}
                title={project.node.data.project_title}
                description={project.node.data.project_preview_description}
                thumbnail={project.node.data.project_preview_thumbnail}
                uid={project.node.uid}
              />
            ))}
        </>
      </Layout>
    </>
  )
}

const Component = ({ data }) => {
  const projects = data.allPrismicProject.edges
  const meta = data.site.siteMetadata
  if (!projects) return null

  return <Work projects={projects} meta={meta} />
}

export default Component;

Work.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    allPrismicProject {
      edges {
        node {
          data {
            project_title {
              text
            }
            project_preview_description {
              text
            }
            project_preview_thumbnail {
              url
            }
            project_category {
              text
            }
            project_post_date(fromNow: true)
            project_is_public
            project_is_featured
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
