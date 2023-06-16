import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PhoneBook } from "./data/data.js";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App phoneBook={PhoneBook} />
  </React.StrictMode>,
)
