import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Gallery } from '../components/gallery'

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <ProjectContainer>
        <h1>{props.data.contentfulProject.title}</h1>
        <Gallery />
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
