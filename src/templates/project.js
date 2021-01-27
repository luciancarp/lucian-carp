import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { screenSizes } from '../styles/global'
import SEO from '../components/seo'
import { Gallery } from '../components/gallery'
import ArrowDrop from '../assets/arrow-drop.svg'
import Stack from '../components/stack'
import ProjectLinks from '../components/project-links'
import Hr from '../components/hr'

import { motion } from 'framer-motion'
import { opacityVariants } from '../styles/variants'
import { spaces, fontSizes } from '../styles/global'

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

const Project = (props) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={opacityVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Content>
        <Align>
          <SEO title={props.data.contentfulProject.title} />
          <ProjectContainer>
            <TitleLine>
              <Title>
                <LeftButton onClick={() => window.history.back()}>
                  <StyledArrowDrop />
                </LeftButton>
                <h1>{props.data.contentfulProject.title}</h1>
              </Title>
              <ProjectLinksContainer>
                <ProjectLinks links={props.data.contentfulProject.links} />
              </ProjectLinksContainer>
            </TitleLine>
            {/* <p>{props.data.contentfulProject.date}</p> */}
            <Gallery images={props.data.contentfulProject.images} />

            <Text>
              {documentToReactComponents(
                props.data.contentfulProject.body.json,
                options
              )}
            </Text>
            <Hr />
            <Stack stack={props.data.contentfulProject.stack} />
          </ProjectContainer>
        </Align>
      </Content>
    </Container>
  )
}

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${spaces.wide};
`

const Align = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const Container = styled(motion.div)`
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  @media (min-width: 1200px) {
    align-items: flex-start;
  }

  min-height: 100vh;
`

const Content = styled.main`
  flex-grow: 1;
  max-width: 600px;
`

const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;

    font-size: ${fontSizes.large};

    border-bottom: 0.1rem solid ${(props) => props.theme.text};
    line-height: 2rem;
  }
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

  fill: ${(props) => props.theme.text};
  transition: fill 0.2s;
  -webkit-transition: fill 0.2s;
  transition-timing-function: ease-out;

  @media (min-width: ${screenSizes.laptop}) {
    &:hover {
      fill: ${(props) => props.theme.primary};
    }
  }
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 2rem;

  width: 100%;
`

const ProjectContainer = styled.div`
  padding-top: 10vh;
  width: 100%;
`

export default Project
