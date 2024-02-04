import * as S from './UiCard.style'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import del from '../../assets/delete-svgrepo-com.svg'
import like from '../../assets/like-svgrepo-com.svg'
import liked from '../../assets/like-svgrepo-com (1).svg'
import { DeletePost, LikePost } from '../../api/reducer/cardsReducer'

type Props = {
  id: number
  title: string
  completed: boolean
  body: string
}

export default function UiCard({ id, title, completed, body }: Props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <S.PostWrapper>
      <S.ImageWrapper onClick={() => dispatch(DeletePost({ id }))}>
        <img src={del} width="20px" height="20px" />
      </S.ImageWrapper>
      <S.PostInfoWrapper onClick={() => navigate(`/more/${id}`)}>
        <S.PostCardTitle>{title?.slice(0, 10)}</S.PostCardTitle>
        <p>
          {body?.slice(0, 50)} <span>...</span> <br />
        </p>
      </S.PostInfoWrapper>
      <S.LikeButton onClick={() => dispatch(LikePost({ id }))}>
        {!completed ? (
          <img src={like} width="20px" height="20px" />
        ) : (
          <img src={liked} width="20px" height="20px" />
        )}
      </S.LikeButton>
    </S.PostWrapper>
  )
}
