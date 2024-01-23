import styled from 'styled-components'

export const BaseStyle = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`
export const ContentCheckbox = styled.div`
  width: 100%;
  h1 {
    font-size: 1.125rem;
  }
`

export const PurpleIcon = styled.span`
  color: ${(props) => props.theme.purple};
`

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h2 {
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 0.875rem;
  }
`

export const MapIcon = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
`
export const InputArea = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'cep . . .'
    'rua rua rua rua'
    'num complemento complemento complemento'
    'bairro cidade cidade uf';

  input {
    padding: 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    font-size: 0.875rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  .cep {
    grid-area: cep;
  }

  .rua {
    grid-area: rua;
  }

  .num {
    grid-area: num;
  }

  .complemento {
    grid-area: complemento;
  }

  .bairro {
    grid-area: bairro;
  }

  .cidade {
    grid-area: cidade;
  }

  .uf {
    grid-area: uf;
  }
`

export const OptionsPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: ${(props) => props.theme['base-button']};
    padding: 1rem;
    border-radius: 6px;
    width: 11rem;
    cursor: pointer;
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`
