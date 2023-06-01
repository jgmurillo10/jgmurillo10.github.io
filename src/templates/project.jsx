import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { graphql } from "gatsby"
import { PrismicRichText } from "@prismicio/react"
import Button from "components/_ui/Button"
import Layout from "components/Layout"
import Newsletter from "../components/_ui/Newsletter"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

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

const Project = ({ project, meta }) => {
  console.log('>>>', {project})
  const { formatMessage } = useIntl();
  return (
    <>
      <Helmet
        title={`${project.project_title.text} | Projects`}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${project.project_title.text} | Projects`,
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
    </>
  )
}

const Component = ({ data, location }) => {
  const { language } = useUpdateLanguage({ location })
  const projectContent = data.allPrismicProject.edges.find(edge => edge.node.lang === language.current)?.node.data;
  const meta = data.site.siteMetadata
  return <Project project={projectContent} meta={meta} />
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
