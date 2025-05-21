import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let root: Root | null = null

export function renderReactApp(page = 'Home', containerId = 'root') {
  const container = document.getElementById(containerId)!
  if (!root) {
    root = createRoot(container)
  }
  root.render(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  )
}

(window as any).renderReactApp = renderReactApp
