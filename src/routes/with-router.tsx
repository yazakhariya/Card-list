import router from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const RoutesProvider = () => {
  return <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
}

export default RoutesProvider
