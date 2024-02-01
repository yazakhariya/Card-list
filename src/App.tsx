import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetPostsQuery } from 'src/api/actionCreator/fetchApi'
import { PostsReceived } from 'src/api/reducer/cardsReducer'
import RoutesProvider from './routes/with-router'

function App() {
  const { data } = useGetPostsQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PostsReceived(data))
  }, [data])

  return <RoutesProvider />
}

export default App
