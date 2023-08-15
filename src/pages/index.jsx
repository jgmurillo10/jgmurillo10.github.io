import React from "react"
import PropTypes from "prop-types"
import { PrismicRichText } from "@prismicio/react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import { useUpdateLanguage } from "../hooks/useUpdateLanguage"
import { Link } from "gatsby-plugin-intl"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const HeroImage = styled("img")`
  width: 260px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  transition: transform 300ms ease;

  :hover {
    transform: scale(1.1);
  }
`

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`
export { Head } from './../components/Head'

const Homepage = ({ home, projects }) => (
  <>
    <Hero>
      <HeroImage src={home.data.hero_image.url} alt="" />
      <PrismicRichText field={home.data.hero_title.richText} />
      <a
        href="https://drive.google.com/file/d/1AKFJ3tXX50QW-UsGw9WfJy30SUCzGggd/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button><PrismicRichText field={home.data.hero_button_text.richText} /></Button>
      </a>
    </Hero>
    <Section>
      {projects
        .filter(project => project.node.data.project_is_public)
        .filter(project => project.node.data.project_is_featured)
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
      <WorkAction to={"/work"}>
        See more work <span>&#8594;</span>
      </WorkAction>
    </Section>
    <Section>
      <PrismicRichText field={home.data.about_title.richText} />
      <About bio={home.data.about_bio || ''} socialLinks={home.data.about_links} />
    </Section>
  </>
)

const Component = ({ location }) => {
  //Required check for no data being returned
  const { language } = useUpdateLanguage({ location });
  const data = useStaticQuery(query);
  const doc = data.allPrismicHomepage.edges.find(edge => edge.node.lang === language.current);
  const projects = data.allPrismicProject.edges.filter(edge => edge.node.lang === language.current);

  if (!doc || !projects) return null

  return (
    <Layout>
      <Homepage home={doc.node} projects={projects} />
    </Layout>
  )
}

export default Component;

Homepage.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
}

const query = graphql`
  query HomepageQuery {
    allPrismicHomepage {
      edges {
        node {
          lang
          alternate_languages {
            lang
            document {
              ... on PrismicHomepage {
                url
              }
            }
          }
          data {
            hero_title {
              text
              richText
            }
            hero_image {
              url
            }
            hero_button_text {
              text
              richText
            }
            content {
              text
            }
            about_title {
              text
              richText
            }
            about_bio {
              text
            }
            about_links {
              about_link {
                text
                richText
              }
            }
          }
        }
      }
    }
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
              richText
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
  }
`
