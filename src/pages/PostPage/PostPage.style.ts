import { styled } from 'styled-components'

export const MainWrapper = styled.div`
  height: 100vh;
  background-color: #fef7f5;
  padding: 50px;
`

export const PostInfoWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 600px;
  text-align: justify;

  // tablet version
  @media (max-width: 1024px) {
    width: 100%px;
  }

  // mobile version
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ImageWrapper = styled.div`
  cursor: pointer;
  width: fit-content;
`

export const PostCardTitle = styled.span`
  color: #aaaaaa;
  margin-bottom: 10px;
`
