import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/Background.svg'
import { TitleText } from '../../../../components/Typography'
// import { rgba } from 'polished'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  //background: ${() => `url(${introBackgroundImg}) no-repeat center`};
  //background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    height: 100%;
  }
`

export const IntroContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1000px) {
    img {
      width: 330px;
      height: auto;
    }
  }

  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;

    img {
      display: none;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
