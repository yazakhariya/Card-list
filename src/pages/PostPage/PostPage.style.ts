import { styled } from 'styled-components'

export const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #fef7f5;
  padding: 50px;
`

export const PostInfoWrapper = styled.div<{ open?: boolean }>`
  padding: 15px;
  display: flex;
  flex-direction: column;
  ${(props) => (props.open === true ? `width: 400px;` : `width: 300px;`)}
  text-align: justify;

  // tablet version
  @media (max-width: 1024px) {
    ${(props) => (props.open === true ? `width: 375px;` : `width: 275px;`)}
  }

  // mobile version
  @media (max-width: 768px) {
    ${(props) => (props.open === true ? `width: 350px;` : `width: 250px;`)}
  }
`

export const ImageWrapper = styled.div`
  cursor: pointer;
`

export const PostCardTitle = styled.span`
  color: #aaaaaa;
`