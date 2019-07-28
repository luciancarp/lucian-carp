import React from 'react'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'
import workStyles from './work.module.scss'

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
    <li className={workStyles.workItem}>
      <Fade bottom>
        <h3>{edge.node.title}</h3>
        <p>{edge.node.description}</p>
        <a href="https://www.gatsbyjs.org">Check it out.</a>
      </Fade>
    </li>
  ))

  return (
    <section id={'work'} className={workStyles.container}>
      <Fade bottom>
        <h1>Work</h1>
      </Fade>
      <ul className={workStyles.workList}>{projectList}</ul>
    </section>
  )
}

export default Work
