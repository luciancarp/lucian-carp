import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Hr from './hr'

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
            category
          }
        }
      }
    }
  `)

  const fullstackList = data.allContentfulProject.edges
    .filter((edge) => edge.node.category === 0)
    .map((edge) => (
      <StyledLink to={`/${edge.node.slug}`}>
        <WorkItem>
          <h3>{edge.node.title}</h3>
          <Date>{edge.node.date}</Date>
          <p>{edge.node.description}</p>
        </WorkItem>
      </StyledLink>
    ))

  const websitesList = data.allContentfulProject.edges
    .filter((edge) => edge.node.category === 1)
    .map((edge) => (
      <StyledLink to={`/${edge.node.slug}`}>
        <WorkItem>
          <h3>{edge.node.title}</h3>
          <Date>{edge.node.date}</Date>
          <p>{edge.node.description}</p>
        </WorkItem>
      </StyledLink>
    ))

  const otherList = data.allContentfulProject.edges
    .filter((edge) => edge.node.category === 2)
    .map((edge) => (
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
      <StyledCategory>Full Stack Apps</StyledCategory>
      <GridContainer>{fullstackList}</GridContainer>
      <Hr />
      <StyledCategory>Websites</StyledCategory>
      <GridContainer>{websitesList}</GridContainer>
      <Hr />
      <StyledCategory>Other Projects</StyledCategory>
      <GridContainer>{otherList}</GridContainer>
    </Container>
  )
}

const StyledCategory = styled.h2`
  margin-bottom: ${spaces.narrow};
`

const Container = styled.section`
  padding-top: 5vh;
  min-height: 100vh;

  h1 {
    padding-top: 5vh;
  }
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

  color: ${(props) => props.theme.text};

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      background-color: ${(props) => props.theme.backgroundoppositeTransp};
      h3 {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;

  list-style-type: none;
  margin: 0;

  > :nth-child(2n) {
    margin-right: -${spaces.wide};
    padding-right: ${spaces.wide};
    padding-left: ${spaces.wide};
  }

  > :nth-child(2n-1) {
    margin-left: -${spaces.wide};
    padding-left: ${spaces.wide};
    padding-right: ${spaces.wide};
  }
`

const WorkItem = styled.li`
  padding-top: ${spaces.wide};
  padding-bottom: ${spaces.wide};

  background-color: none;
  transition: background-color 0.3s;
  -webkit-transition: background-color 0.3s;
  transition-timing-function: ease-out;

  h3 {
    transition: color 0.3s;
    -webkit-transition: color 0.3s;
    transition-timing-function: ease-out;

    display: inline-block;
    border-bottom: 0.15rem solid ${(props) => props.theme.text};
    line-height: 2rem;
  }
`

const Date = styled.p`
  margin-bottom: ${spaces.narrow};
`

export default Work
