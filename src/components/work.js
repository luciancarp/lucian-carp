import React from 'react'
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
      <div>
        <h3>{edge.node.title}</h3>
        <p>{edge.node.description}</p>
        <a href="https://www.gatsbyjs.org">Check it out.</a>
      </div>
    </li>
  ))

  return (
    <section id={'work'} className={workStyles.container}>
      <h1>Work</h1>

      <ul className={workStyles.workList}>{projectList}</ul>
    </section>
  )
}

export default Work
