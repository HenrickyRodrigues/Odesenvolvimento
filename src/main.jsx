import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { GeneralStyle } from './components/GeneralStyles.jsx'
import {router} from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
