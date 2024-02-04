import { FilterPost } from '../../../../api/reducer/cardsReducer'
import * as S from './Filters.style'
import { useDispatch } from 'react-redux'


export default function Filters() {
  const dispatch = useDispatch()

  return (
    <S.FiltersWrapper>
      <S.Button onClick={() => dispatch(FilterPost())}>filter</S.Button>
    </S.FiltersWrapper>
  )
}
