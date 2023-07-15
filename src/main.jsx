import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route } from 'wouter'

import './index.css'
import App from './App.jsx'
import { AboutUsPage } from './pages/aboutUsPage'
import { ServicesPage } from './pages/servicesPage'

function Router() {
  return (
    <div>
      <Route path='/' component={App} />
      <Route path='/quienes-somos' component={AboutUsPage} />
      <Route path='/nuestros-servicios' component={ServicesPage} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
