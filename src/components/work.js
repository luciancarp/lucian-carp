import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            description
          }
        }
      }
    }
  `)

  const projectList = data.allContentfulProject.edges.map(edge => (
    <li>
      <h2>{edge.node.title}</h2>
      <p>{edge.node.description}</p>
    </li>
  ))

  return (
    <div>
      <h1>Work</h1>
      <ol>{projectList}</ol>
    </div>
  )
}

export default Work
