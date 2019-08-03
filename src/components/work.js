import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import workStyles from './work.module.scss'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            title
            description
            slug
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
        <Link to={`/${edge.node.slug}`}>Check it out.</Link>
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
