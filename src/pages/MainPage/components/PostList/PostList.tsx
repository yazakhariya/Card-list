import * as S from './PostList.style'
import { useSelector } from 'react-redux'
import UiCard from 'src/components/UiCard/UiCard'

type PostType = {
  id: number
  title: string
  completed: boolean
  body: string
}

export default function PostList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = useSelector((store: any) => store.post.post)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter = useSelector((store: any) => store.post.FilterPost)

  const filteredList = filter
    ? posts.filter((post: { completed: boolean }) => post.completed)
    : posts

  return (
    <S.PostListWrapper>
      {posts ? (
        filteredList.map((post: PostType) => <UiCard key={post.id} {...post} />)
      ) : (
        <p>Loading...</p>
      )}
    </S.PostListWrapper>
  )
}
