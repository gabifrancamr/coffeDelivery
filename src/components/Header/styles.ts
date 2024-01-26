import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    cursor: pointer;
  }
`

export const Localization = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors['brand-purple-light']};
  color: ${({ theme }) => theme.colors['brand-purple-dark']};
  line-height: 1.3;
  border-radius: 6px;

  &:first-child {
    // ícone de localização
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`
