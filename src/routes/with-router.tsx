import router from './routes'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const RoutesProvider = () => {
  return <RouterProvider router={createHashRouter(router)}></RouterProvider>
}

export default RoutesProvider
