import * as S from './PostPage.style'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ret from 'src/assets/return-svgrepo-com.svg'

export default function PostPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = useSelector((store: any) => store.post.post)

  return (
    <S.MainWrapper>
      {posts
        ?.filter((post: { id: number }) => post.id === Number(id))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ?.map((post: any) => {
          return (
            <>
              <S.ImageWrapper onClick={() => navigate('/')}>
                <img src={ret} width="40px" height="40px" />
              </S.ImageWrapper>
              <S.PostInfoWrapper>
                <S.PostCardTitle>{post.title}</S.PostCardTitle>
                <p>{post.body}</p>
              </S.PostInfoWrapper>
            </>
          )
        })}
    </S.MainWrapper>
  )
}
