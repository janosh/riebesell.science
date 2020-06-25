const path = require(`path`)
const svgToMiniDataURI = require(`mini-svg-data-uri`)
const fs = require(`fs`).promises
const SVGO = require(`svgo`)

// Enable absolute imports from `src`.
// https://gatsbyjs.org/docs/add-custom-webpack-config#absolute-imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
    },
  })
}

// https://github.com/gatsbyjs/gatsby/issues/25193
exports.createResolvers = ({ createResolvers }) => {
  const svgo = new SVGO()
  const resolvers = {
    File: {
      dataURI: {
        type: `String`,
        // full resolve args: parent, args, context, info
        async resolve(parent) {
          if (parent.extension === `svg` && parent.size < 20000) {
            const svg = await fs.readFile(parent.absolutePath, `utf8`)
            const { data } = await svgo.optimize(svg)
            return svgToMiniDataURI(data)
          }
          return null
        },
      },
    },
  }
  createResolvers(resolvers)
}
