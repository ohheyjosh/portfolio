module.exports = {
  siteMetadata: {
    title: `Josh Barnett`,
    author: `Josh Barnett`,
    description: `Hi 👋 I'm Josh. I'm using modern web tech to make everyday things for everyday humans.`,
    image: `/images/josh.jpg`,
    twitterUsername: `@oh_hey_josh`,
    url: `https://heyjo.sh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Josh Barnett`,
        short_name: `josh`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Inter`, subsets: [`latin`] }],
      },
    },
    "gatsby-plugin-dark-mode",
  ],
}
