import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { spaces, screenSizes, fontSizes } from '../styles/global'

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
            stackMain {
              title
            }
          }
        }
      }
    }
  `)

  const Project = ({ title, description, slug, stack }) => (
    <StyledLink to={`/${slug}`}>
      <WorkItem>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <StackTagsContainer>
          {stack.map((stackItem) => (
            <StackTag>{stackItem.title}</StackTag>
          ))}
        </StackTagsContainer>
      </WorkItem>
    </StyledLink>
  )

  const fullstackList = data.allContentfulProject.edges
    .filter((edge) => edge.node.category === 0)
    .map((edge) => (
      <Project
        title={edge.node.title}
        slug={edge.node.slug}
        description={edge.node.description}
        stack={edge.node.stackMain}
      />
    ))

  const websitesList = data.allContentfulProject.edges
    .filter((edge) => edge.node.category === 1)
    .map((edge) => (
      <Project
        title={edge.node.title}
        slug={edge.node.slug}
        description={edge.node.description}
        stack={edge.node.stackMain}
      />
    ))

  const otherList = data.allContentfulProject.edges
    .filter((edge) => edge.node.category === 2)
    .map((edge) => (
      <Project
        title={edge.node.title}
        slug={edge.node.slug}
        description={edge.node.description}
        stack={edge.node.stackMain}
      />
    ))

  return (
    <Container id={'work'}>
      <StyledCategory>Full Stack Apps</StyledCategory>
      <GridContainer>{fullstackList}</GridContainer>
      <Spacer />
      <StyledCategory>Websites</StyledCategory>
      <GridContainer>{websitesList}</GridContainer>
      <Spacer />
      <StyledCategory>Other Projects</StyledCategory>
      <GridContainer>{otherList}</GridContainer>
    </Container>
  )
}

const StackTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;

  margin-top: ${spaces.narrow};
  margin-right: -${spaces.narrow};
`

const StackTag = styled.i`
  color: ${(props) => props.theme.primary};
  font-size: ${fontSizes.small};
  margin-right: ${spaces.narrow};

  line-height: 1.2rem;
`

const Spacer = styled.div`
  height: ${spaces.spacer};
`

const StyledCategory = styled.h2`
  margin-bottom: ${spaces.narrow};
`

const Container = styled.section`
  margin-top: ${spaces.spacer};
  @media (min-width: ${screenSizes.laptop}) {
    margin-top: ${spaces.narrow};
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

  background-color: none;
  transition: background-color 0.3s;
  -webkit-transition: background-color 0.3s;
  transition-timing-function: ease-in-out;

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
  grid-template-columns: 1fr;
  /* grid-auto-rows: 1fr; */

  list-style-type: none;
  margin: 0;

  @media (min-width: ${screenSizes.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;

    list-style-type: none;
    margin: 0;

    > :nth-child(2n) {
      margin-right: -${spaces.regular};
      padding-right: ${spaces.regular};
      padding-left: ${spaces.regular};
    }

    > :nth-child(2n-1) {
      margin-left: -${spaces.regular};
      padding-left: ${spaces.regular};
      padding-right: ${spaces.regular};
    }
  }
`

const WorkItem = styled.li`
  padding-top: ${spaces.regular};
  padding-bottom: ${spaces.regular};
  margin: 0;

  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-color: none;
  transition: background-color 0.3s;
  -webkit-transition: background-color 0.3s;
  transition-timing-function: ease-out;

  h3 {
    transition: color 0.3s;
    -webkit-transition: color 0.3s;
    transition-timing-function: ease-out;

    display: inline-block;
    border-bottom: 0.1rem solid ${(props) => props.theme.text};
    line-height: 1.5rem;

    font-size: ${fontSizes.regular};

    margin-bottom: ${spaces.narrow};
    @media (min-width: ${screenSizes.laptop}) {
      font-size: ${fontSizes.regular};
      margin-bottom: ${spaces.narrow};
    }
  }
`

export default Work
