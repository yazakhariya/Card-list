import * as S from './MainPage.style'
import Filters from "./components/Filters/Filters"
import PostList from "./components/PostList/PostList"

export default function MainPage() {
  return (
    <S.MainWrapper>
      <Filters />
      <PostList />
    </S.MainWrapper>
  )
}
