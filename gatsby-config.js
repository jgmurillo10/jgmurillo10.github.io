module.exports = {
  siteMetadata: {
    title: `Juan Murillo`,
    description: `Colombian Software Engineer passionate about web development and coffee.`,
    image:
      "https://images.prismic.io/juanmurillo/5b80d6a0-22b2-425b-b33d-f6a77a88c5d3_arje_car_high.jpg?auto=compress,format",
    author: `Juan Murillo | juanmurillo.co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "juanmurillo", // (REQUIRED, replace with your own)
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GTM-53VVVRQ", "UA-151322260-1"],
        pluginConfig: {
          head: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}