import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
const ClientId = import.meta.env.VITE_CLIENTID
const DomainId = import.meta.env.VITE_DOMAINID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain={DomainId}  clientId={ClientId} authorizationParams={{redirect_uri:window.location.origin}}>
      <Provider store={Store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
