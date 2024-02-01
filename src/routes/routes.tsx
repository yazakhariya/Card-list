import { RouteObject } from 'react-router-dom'
import PostPage from 'src/pages/PostPage/PostPage'
import MainPage from 'src/pages/MainPage/MainPage'
import NotFound from 'src/pages/NotFound/NotFound'



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