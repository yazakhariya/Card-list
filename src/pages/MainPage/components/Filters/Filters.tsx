import * as S from './Filters.style'
import { useDispatch } from 'react-redux'
import { FilterPost, filters } from 'src/api/reducer/cardsReducer'

export default function Filters() {
  const dispatch = useDispatch()

  return (
    <S.FiltersWrapper>
      <S.Button onClick={() => dispatch(FilterPost(filters.ALL))}>All</S.Button>
      <S.Button onClick={() => dispatch(FilterPost(filters.LIKED))}>
        Liked
      </S.Button>
    </S.FiltersWrapper>
  )
}
