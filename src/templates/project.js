import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { screenSizes } from '../styles/global'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Gallery } from '../components/gallery'
import Left from '../assets/left.svg'

// GatsbyContentfulFluid not working in graphiql or playground
export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description
      images {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulProject.title} />
      <ProjectContainer>
        <Title>
          {/* <Link to={`/`}> */}
          <LeftButton onClick={() => window.history.back()}>
            <StyledLeft />
          </LeftButton>
          {/* </Link> */}
          <h1>{props.data.contentfulProject.title}</h1>
        </Title>
        <Gallery images={props.data.contentfulProject.images} />
        <p>{props.data.contentfulProject.description}</p>
        <p>{props.data.contentfulProject.description}</p>
        <p>{props.data.contentfulProject.description}</p>
        <p>{props.data.contentfulProject.description}</p>
        <p>{props.data.contentfulProject.description}</p>
        <p>{props.data.contentfulProject.description}</p>
      </ProjectContainer>
    </Layout>
  )
}

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin: 0;
  }

  margin-bottom: 1.5rem;
`

const StyledLeft = styled(Left)`
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const LeftButton = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  fill: ${props => props.theme.text};
  transition: fill 0.2s;
  -webkit-transition: fill 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: ${props => props.theme.primary};
    }
  }
`

const ProjectContainer = styled.div`
  padding-top: 10vh;
`

export default Project
