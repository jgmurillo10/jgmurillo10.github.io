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
        allPrismicProject(sort: {lang: ASC}, filter: {lang: {eq: "en-us"}}) {
          edges {
            node {
              uid
              url
              lang
            }
          }
        }
        allPrismicPost(sort: {lang: ASC}, filter: {lang: {eq: "en-us"}}) {
          edges {
            node {
              uid
              url
              lang
            }
          }
        }
      }
    `)
  )

  const projectsList = result.data.allPrismicProject.edges
  const postsList = result.data.allPrismicPost.edges

  const projectTemplate = require.resolve("./src/templates/project.jsx")
  const postTemplate = require.resolve("./src/templates/post.jsx")

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
        lang: edge.node.lang
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
