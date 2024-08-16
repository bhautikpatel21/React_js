import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Store from './redux/Store.jsx'
// import { Provider } from 'react-redux'
import { Navbar } from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
      <Navbar/>
  </React.StrictMode>
)
