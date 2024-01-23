import styled from 'styled-components'

export const BoldFont = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`
export const ConfirmationButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  padding: 0.75rem 0.5rem;
  border: transparent;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  margin-top: 1rem;
  cursor: pointer;
`
export const PriceArea = styled.div`
  margin-top: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PriceCoffe = styled.span`
  font-weight: bold;
`
export const QuantityAndButton = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const RemoveButton = styled.button`
  border: transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  gap: 0.3rem;
`

export const SmallFont = styled.span`
  font-size: 0.875rem;
`
export const BaseStyle = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const StyleSelectCoffe = styled(BaseStyle)`
  border-top-left-radius: 10px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
`

export const SelectedCoffe = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 2rem;

  img {
    width: 70px;
    height: 70px;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  & + & {
    margin-top: 2rem;
  }
`
