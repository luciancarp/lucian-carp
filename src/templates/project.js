import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

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
      <h1>{props.data.contentfulProject.title}</h1>
      <p>{props.data.contentfulProject.description}</p>
    </Layout>
  )
}

export default Project
