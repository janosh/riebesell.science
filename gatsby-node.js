const path = require(`path`)

// Enable absolute imports from `src`.
// https://gatsbyjs.org/docs/add-custom-webpack-config#absolute-imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}
