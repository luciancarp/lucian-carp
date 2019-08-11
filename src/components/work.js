import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { spaces } from '../styles/global'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [index], order: [ASC] }) {
        edges {
          node {
            title
            description
            slug
            index
          }
        }
      }
    }
  `)

  const projectList = data.allContentfulProject.edges.map(edge => (
    <WorkItem>
      <div>
        <h3>{edge.node.title}</h3>
        <p>{edge.node.description}</p>
        <Link to={`/${edge.node.slug}`}>Check it out.</Link>
      </div>
    </WorkItem>
  ))

  return (
    <Container id={'work'}>
      <h1>Work</h1>
      <WorkList>{projectList}</WorkList>
    </Container>
  )
}

const Container = styled.section`
  margin-top: 10vh;
  min-height: 100vh;

  h1 {
    padding-top: 5vh;
  }
`

const WorkList = styled.ul`
  list-style-type: none;
  margin: 0;
`

const WorkItem = styled.li`
  padding-top: ${spaces.wide};
  padding-bottom: ${spaces.wide};

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }
`

export default Work
