import React from 'react'
import Fade from 'react-reveal/Fade'
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
      <Fade bottom>
        <h3>{edge.node.title}</h3>
        <p>{edge.node.description}</p>
      </Fade>
    </li>
  ))

  return (
    <section>
      <ul>{projectList}</ul>
    </section>
  )
}

export default Work
