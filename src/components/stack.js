import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Stack = ({ stack }) => {
  return (
    <StyledStack>
      {stack.map(item => {
        let index = stack.findIndex(i => i.title === item.title)
        return (
          <StyledItem first={index === 0}>
            <StyledImg fixed={item.fixed} />
            <StyledItemTitle>{item.title}</StyledItemTitle>
          </StyledItem>
        )
      })}
    </StyledStack>
  )
}

const StyledStack = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  margin-left: 0;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: ${props => (props.first ? '0' : '2rem')};
`

const StyledItemTitle = styled.h5`
  margin-top: 0.5rem;
`

const StyledImg = styled(Img)``

export default Stack
