import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Gallery } from '../components/gallery'

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
        <h1>{props.data.contentfulProject.title}</h1>
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

const ProjectContainer = styled.div`
  padding-top: 10vh;
`

export default Project
