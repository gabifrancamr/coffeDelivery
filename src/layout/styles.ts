import styled from 'styled-components'

export const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 7rem;
  @media (max-width: 1000px) {
    padding: 0rem 4rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`
