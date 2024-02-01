import * as S from './PostList.style'
import { useSelector } from 'react-redux'
import UiCard from 'src/components/UiCard/UiCard'
import { filters } from 'src/api/reducer/cardsReducer'

export default function PostList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = useSelector((store: any) => store.post.post)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter = useSelector((store: any) => store.post.FilterPost)

  const filteredList = () => {
    if (filter === filters.LIKED) {
      return posts.filter((post: { completed: boolean }) => post.completed)
    }

    return posts
  }

  return (
    <S.PostListWrapper>
      {posts ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filteredList().map((post: any) => <UiCard key={post.id} {...post} />)
      ) : (
        <p>Loading...</p>
      )}
    </S.PostListWrapper>
  )
}
