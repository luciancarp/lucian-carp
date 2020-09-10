import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { screenSizes } from '../styles/global'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Gallery } from '../components/gallery'
import ArrowDrop from '../assets/arrow-drop.svg'
import Stack from '../components/stack'
import ProjectLinks from '../components/project-links'
import Hr from '../components/hr'

// GatsbyContentfulFluid not working in graphiql or playground
export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description
      date(formatString: "MMMM YYYY")
      body {
        json
      }
      images {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
        }
        description
        title
      }
      stack {
        title
        fixed(height: 50, width: 50, quality: 90, resizingBehavior: PAD) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      links {
        github
        link
        youtube
        gitlab
      }
    }
  }
`

const Project = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulProject.title} />
      <ProjectContainer>
        <Title>
          <LeftButton onClick={() => window.history.back()}>
            <StyledArrowDrop />
          </LeftButton>
          <h1>{props.data.contentfulProject.title}</h1>
        </Title>
        <p>{props.data.contentfulProject.date}</p>
        <Gallery images={props.data.contentfulProject.images} />
        <ProjectLinksContainer>
          <ProjectLinks links={props.data.contentfulProject.links} />
        </ProjectLinksContainer>
        <Text>
          {documentToReactComponents(
            props.data.contentfulProject.body.json,
            options
          )}
        </Text>
        <Hr />
        <Stack stack={props.data.contentfulProject.stack} />
      </ProjectContainer>
    </Layout>
  )
}

const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

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

const StyledArrowDrop = styled(ArrowDrop)`
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

const Text = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 2rem;
`

const ProjectContainer = styled.div`
  padding-top: 10vh;
`

export default Project
