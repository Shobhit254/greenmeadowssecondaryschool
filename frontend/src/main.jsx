import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   // 👈 YE LINE MISSING THI
import App from './App.jsx'
import './assets/css/style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



