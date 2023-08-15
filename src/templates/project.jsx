import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import Button from "components/_ui/Button"
import Layout from "components/Layout"
import Newsletter from "../components/_ui/Newsletter"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { Head as HeadBase } from "../components/Head";

const ProjectHeroContainer = styled("div")`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-top: 2.25em;
  margin-bottom: 3.5em;

  img {
    max-width: 600px;
  }
`

const ProjectTitle = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
`

const ProjectBody = styled("div")`
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

const WorkLink = styled(Link)`
  margin-top: 3em;
  display: block;
  text-align: center;
`

const StackPill = styled("span")`
  background-color: #f2f2f2;
  border-radius: 32px;
  margin: 8px;
  padding: 8px 16px;
`

const ProjectStack = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0;
  justify-content: center;
`

export const Head = ({ data, location }) => {
  const { language } = useUpdateLanguage({ doc: data.prismicProject, location })
  const projectContent = data.allPrismicProject.edges.find(edge => edge.node.lang === language.current)?.node.data;

  return (
    <HeadBase
      title={projectContent.project_title.text + ' | Projects | Juan Murillo'}
      description={projectContent.project_preview_description.text}
      image={projectContent.project_preview_thumbnail.url}
    />
  )
}

const Project = ({ project }) => {
  const { formatMessage } = useIntl();

  return (
    <Layout>
      <ProjectTitle><PrismicRichText field={project.project_title.richText} /></ProjectTitle>
      <ProjectStack>
        {project.stack.map(({ technology }) => (
          <StackPill key={technology.text}>{technology.text}</StackPill>
        ))}
      </ProjectStack>
      {project.project_hero_image && (
        <ProjectHeroContainer>
          <img src={project.project_hero_image.url} alt="bees" />
        </ProjectHeroContainer>
      )}
      <ProjectBody>
        <PrismicRichText field={project.project_description.richText} />
        <WorkLink to={"/work"}>
          <Button className="Button--secondary"><FormattedMessage id="moreWork" /></Button>
        </WorkLink>
      </ProjectBody>
      <Newsletter
        body={formatMessage({ id: "subscribeDescription" })}
      />
    </Layout>
  )
}

const Component = ({ data, location }) => {
  const { language } = useUpdateLanguage({ location })
  const projectContent = data.allPrismicProject.edges.find(edge => edge.node.lang === language.current)?.node.data;

  return <Project project={projectContent || data.allPrismicProject.edges[0].node.data} />
}

export default Component;

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export const query = graphql`
  query ProjectQuery($uid: String) {
    allPrismicProject(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          lang
          alternate_languages {
            lang
            document {
              ... on PrismicProject {
                url
              }
            }
          }
          data {
            project_title {
              text
              richText
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
            project_hero_image {
              url
            }
            project_description {
              richText
            }
            stack {
              technology {
                text
              }
            }
          }
        }
      }
    }
  }
`
