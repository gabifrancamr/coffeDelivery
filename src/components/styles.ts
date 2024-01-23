import styled from 'styled-components'

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 2rem 10rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
    position: relative;
  }
`

export const Localization = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  line-height: 1.3;
  border-radius: 6px;

  &:first-child {
    color: ${(props) => props.theme.purple};
  }
`

export const QuantityItems = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
`
