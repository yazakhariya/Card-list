import * as S from './Filters.style'
import { useDispatch } from 'react-redux'
import { FilterPost } from 'src/api/reducer/cardsReducer'

export default function Filters() {
  const dispatch = useDispatch()

  return (
    <S.FiltersWrapper>
      <S.Button onClick={() => dispatch(FilterPost())}>filter</S.Button>
    </S.FiltersWrapper>
  )
}
