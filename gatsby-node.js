const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve('./src/templates/project.js')
  const res = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
