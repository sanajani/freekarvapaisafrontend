import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'

// import {QueryClient} from '@'

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App