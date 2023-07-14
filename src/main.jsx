import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route } from 'wouter'

import './index.css'
import App from './App.jsx'
import { AboutUs } from './components/aboutUs'
import { Services } from './components/services'


function Router() {
  return (
    <div>
      <Route path='/' component={App} />
      <Route path='/sobre-nosotros' component={AboutUs} />
      <Route path='/nuestros-servicios' component={Services} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
