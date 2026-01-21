import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Routes from '../Routes.jsx'
import AuthContext from './Context/AuthContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthContext>
    <Routes>
       
    </Routes>
      </AuthContext>
  </StrictMode>,
)
