import { GlobalStyle } from 'src/theme/global.style'
import router from './routes'
import { RouterProvider, createHashRouter } from 'react-router-dom'

const RoutesProvider = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={createHashRouter(router)}></RouterProvider>
    </>
  )
}

export default RoutesProvider
