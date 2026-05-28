import { StrictMode } from 'react'
import { BrowserRouter } from 'react-dom/client'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)