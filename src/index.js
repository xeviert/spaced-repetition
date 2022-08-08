import 'unfetch/polyfill'
import React from 'react'
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import App from './components/App/App'
import './setup-icons'
import './index.css'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
)

serviceWorker.unregister()
