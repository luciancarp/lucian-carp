import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { spaces, screenSizes } from '../styles/global'

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [index], order: [ASC] }) {
        edges {
          node {
            title
            description
            slug
            date(formatString: "MMMM YYYY")
            index
          }
        }
      }
    }
  `)

  const projectList = data.allContentfulProject.edges.map(edge => (
    <StyledLink to={`/${edge.node.slug}`}>
      <WorkItem>
        <h3>{edge.node.title}</h3>
        <Date>{edge.node.date}</Date>
        <p>{edge.node.description}</p>
      </WorkItem>
    </StyledLink>
  ))

  return (
    <Container id={'work'}>
      <WorkList>{projectList}</WorkList>
    </Container>
  )
}

const Container = styled.section`
  padding-top: 5vh;
  min-height: 100vh;

  h1 {
    padding-top: 5vh;
  }
`

const WorkList = styled.ul`
  list-style-type: none;
  margin: 0;
`

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  color: ${props => props.theme.text};
`

const WorkItem = styled.li`
  padding-top: ${spaces.wide};
  padding-bottom: ${spaces.wide};
  padding-left: ${spaces.wide};
  padding-right: ${spaces.wide};

  margin-top: 0;
  margin-bottom: 0;
  margin-left: -${spaces.wide};
  margin-right: -${spaces.wide};

  background-color: none;
  transition: background-color 0.3s;
  -webkit-transition: background-color 0.3s;
  transition-timing-function: ease-out;

  h3 {
    transition: color 0.3s;
    -webkit-transition: color 0.3s;
    transition-timing-function: ease-out;

    display: inline-block;
    border-bottom: 0.15rem solid ${props => props.theme.text};
    line-height: 2rem;
  }

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      background-color: ${props => props.theme.backgroundoppositeTransp};
      h3 {
        color: ${props => props.theme.primary};
      }
    }
  }
`

const Date = styled.p`
  margin-bottom: ${spaces.narrow};
`

export default Work
