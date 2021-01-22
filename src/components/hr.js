import styled from 'styled-components'

const Hr = styled.hr`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  width: 100%;
  opacity: 0.5;

  background-color: ${(props) => props.theme.text};
`

export default Hr
