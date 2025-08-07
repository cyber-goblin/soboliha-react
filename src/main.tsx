import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/normalize.css'
import './styles/global.css';
import App from './App.tsx'

const initialPreloader = document.getElementById('initial-preloader')
if (initialPreloader) {
    initialPreloader.remove()
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
