// React e components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

// estilos
import GlobalStyles from './styles/global'
import theme from './styles/theme'

// pages
/*
import {Home} from './pages/Home'
import {CreateMovie} from './pages/CreateMovie'
import {MoviePreview} from './pages/MoviePreview/'
import {SignIn} from './pages/SignIn'
import {SignOut} from './pages/SignOut'
import {User} from './pages/User'
*/

// Rotas
import { Routes } from '../src/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  </StrictMode>,
)

