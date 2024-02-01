import { styled } from 'styled-components'

export const PostWrapper = styled.div`
  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 15px;
  position: relative;
  background-color: #fef7f5;
  margin-bottom: 20px;
  padding: 20px;
  -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

export const PostInfoWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 300px;
  text-align: justify;

  // tablet version
  @media (max-width: 1024px) {
    width: 275px;
  }

  // mobile version
  @media (max-width: 768px) {
    width: 250px;
  }
`

export const ImageWrapper = styled.div`
  cursor: pointer;
`

export const LikeButton = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 20px;
`

export const PostCardTitle = styled.span`
  color: #aaaaaa;
`
