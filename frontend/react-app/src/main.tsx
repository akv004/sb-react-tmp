import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export function renderReactApp(containerId = 'root') {
  createRoot(document.getElementById(containerId)!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

(window as any).renderReactApp = renderReactApp
