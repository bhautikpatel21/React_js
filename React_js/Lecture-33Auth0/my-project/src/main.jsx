import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain='dev-xeab4b0scaervfrz.us.auth0.com' clientId='9N3AgsgjrDW2lobexn5qwfHAQMrJC9Oo' authorizationParams={{ redirect_uri: window.location.origin }}>
      <Provider store={Store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
