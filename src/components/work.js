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
      <h3>{edge.node.title}</h3>
      <p>{edge.node.description}</p>
    </li>
  ))

  return (
    <div>
      <h1>Work</h1>
      <ul>{projectList}</ul>
    </div>
  )
}

export default Work
