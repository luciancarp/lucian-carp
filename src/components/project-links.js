import React from 'react'
import styled, { css } from 'styled-components'
import GithubSvg from '../assets/github.svg'
import YoutubeSvg from '../assets/youtube.svg'
import GitlabSvg from '../assets/gitlab.svg'
import ExternalLinkSvg from '../assets/external-link.svg'
import { screenSizes } from '../styles/global'

const ProjectLinks = ({ links }) => {
  return (
    <StyledLinks>
      {links.github !== '' && (
        <Styleda href={links.github}>
          <Github />
        </Styleda>
      )}
      {links.gitlab !== '' && (
        <Styleda href={links.gitlab}>
          <Gitlab />
        </Styleda>
      )}
      {links.youtube !== '' && (
        <Styleda href={links.youtube}>
          <Youtube />
        </Styleda>
      )}
      {links.link !== '' && (
        <Styleda href={links.link}>
          <ExternalLink />
        </Styleda>
      )}
    </StyledLinks>
  )
}

const Styleda = styled.a`
  margin-left: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SvgStyle = css`
  height: 35px;
  width: 35px;

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

const Github = styled(GithubSvg)`
  ${SvgStyle}
`

const Youtube = styled(YoutubeSvg)`
  ${SvgStyle}
`

const Gitlab = styled(GitlabSvg)`
  ${SvgStyle}
`

const ExternalLink = styled(ExternalLinkSvg)`
  ${SvgStyle}
  padding-top: 5px;
`

const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 0;
`

export default ProjectLinks
