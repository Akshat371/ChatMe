import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Allow Apps to use react router components */}
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </StrictMode>,
)
