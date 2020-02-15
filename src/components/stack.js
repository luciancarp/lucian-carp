import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Stack = ({ stack }) => {
  return (
    <StyledStack>
      {stack.map(item => {
        return (
          <StyledItem>
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style-type: none;

  margin-left: 0;
`

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100px;
  margin: 1rem;
`

const StyledItemTitle = styled.h5`
  margin-top: 0.5rem;
  text-align: center;
`

const StyledImg = styled(Img)``

export default Stack
