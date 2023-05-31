// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        allPrismicHomepage {
          edges {
            node {
              uid
              url
              lang
            }
          }
        }
        allPrismicProject {
          edges {
            node {
              uid
              url
            }
          }
        }
        allPrismicPost {
          edges {
            node {
              uid
              url
            }
          }
        }
      }
    `)
  )

  const homepageList = result.data.allPrismicHomepage.edges
  const projectsList = result.data.allPrismicProject.edges
  const postsList = result.data.allPrismicPost.edges

  const homepageTemplate = require.resolve("./src/templates/home.jsx")
  const projectTemplate = require.resolve("./src/templates/project.jsx")
  const postTemplate = require.resolve("./src/templates/post.jsx")

  homepageList.forEach(edge => {
    createPage({
      type: "Homepage",
      match: "/",
      path: edge.node.lang === 'en-us' ? '/' : edge.node.url,
      component: homepageTemplate,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang
      },
    })
  })

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      type: "Project",
      match: "/work/:uid",
      path: edge.node.url,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  postsList.forEach(edge => {
    createPage({
      type: "Post",
      match: "/blog/:uid",
      path: edge.node.url,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
