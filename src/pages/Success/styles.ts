import styled from 'styled-components'

export const SuccessArea = styled.div`
  margin-top: 4rem;
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessInfoAndLogo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OrderText = styled.div`
  width: 50%;
`

export const OrderInformation = styled.div`
  margin-top: 2rem;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  padding: 2.5rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;

  div {
    display: flex;
    align-items: flex-start;
    gap: 0rem 0.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-text']};

    .icon {
      border-radius: 50%;
      padding: 0.5rem;
      display: flex;
      color: ${(props) => props.theme.white};
    }

    .pin {
      background-color: ${(props) => props.theme.purple};
    }

    .timer {
      background-color: ${(props) => props.theme.yellow};
    }

    .money {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`
