import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import { App } from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/home'} element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
