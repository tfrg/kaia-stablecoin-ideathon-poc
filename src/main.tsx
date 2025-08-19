import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import './index.css'
import Router from './router'
import { ThemeProvider } from './context/theme-context'

import { UI_THEME_STORAGE_KEY } from './constants/ui.constants'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/*' element={<Router />} />)
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey={UI_THEME_STORAGE_KEY}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
