import { RouteObject } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import PostPage from '../pages/PostPage/PostPage'
import NotFound from '../pages/NotFound/NotFound'

const router: RouteObject[] = [
   {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/more/:id',
    element: <PostPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router