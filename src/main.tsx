import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import './styles/index.scss'
import { store } from './app/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './common'
import { Toast } from './components/ui'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toast />
  </Provider>
  //  </StrictMode>
)
