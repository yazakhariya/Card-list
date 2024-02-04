import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RoutesProvider from './routes/with-router'
import { useGetPostsQuery } from './api/actionCreator/fetchApi'
import { PostsReceived } from './api/reducer/cardsReducer'

function App() {
  const { data } = useGetPostsQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PostsReceived(data))
  }, [data])

  return <RoutesProvider />
}

export default App
