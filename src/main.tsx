import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import './index.css'

import { ThemeProvider } from './context/theme-context'
import { SidebarProvider } from './components/ui/sidebar'

import Router from './router'
import { UI_THEME_STORAGE_KEY } from './constants/ui.constants'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/*' element={<Router />} />)
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey={UI_THEME_STORAGE_KEY}>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
)
