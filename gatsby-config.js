const queries = require(`./src/utils/algolia`)

require(`dotenv`).config()

const siteMetadata = {
  title: `riebesell.science`,
  description: `Personal homepage of Ulf Riebesell on topics in oceanography ranging from ocean acidification to artificial upwelling`,
  author: `Ulf Riebesell`,
  url: `https://riebesell.science`,
}

const plugins = [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        `gatsby-remark-copy-linked-files`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
            linkImagesToOriginal: false,
          },
        },
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.author,
      short_name: siteMetadata.title,
      display: `standalone`,
      icon: `src/assets/favicon.svg`,
      background_color: `#150956`,
      theme_color: `#150956`,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-transformer-yaml`,
  `gatsby-transformer-csv`,
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries,
      chunkSize: 10000, // default: 1000
    },
  },
]

module.exports = { siteMetadata, plugins }
