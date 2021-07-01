import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import App from './App'

ReactDOM.render(
  <GeistProvider themeType="dark">
    <CssBaseline />
    <App />
  </GeistProvider>,
  document.getElementById('app'),
)
