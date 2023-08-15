import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import Button from "components/_ui/Button"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Head as HeadBase } from "../components/Head"

const WorkTitle = styled("h1")`
  margin-bottom: 1em;
`

export const Head =  () => <HeadBase title="Work | Juan Murillo" />

const Work = ({ projects, meta }) => {
  // TODO(jgmurillo10): Implement this.
  const [logged] = useState(false)

  return (
    <Layout>
      <WorkTitle><FormattedMessage id="work" /></WorkTitle>
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
      <a
        href="https://forms.gle/x75wbdTKjTZqpywD6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button><FormattedMessage id="projectsCTA" /></Button>
      </a>
    </Layout>
  )
}

const Component = ({ data, location }) => {
  const { language } = useUpdateLanguage({ location });
  const projects = data.allPrismicProject.edges.filter(edge => edge.node.lang === language.current);
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
          lang
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
