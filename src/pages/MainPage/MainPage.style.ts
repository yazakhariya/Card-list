import { styled } from 'styled-components'

export const MainWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;

  // tablet version
  @media (max-width: 1024px) {
    padding: 40px;
  }

  // mobile version
  @media (max-width: 768px) {
    padding: 25px;
  }
`
