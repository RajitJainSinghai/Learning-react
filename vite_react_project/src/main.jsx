import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement = (
//   <a href='https://google.com' target='_blank'>Visit google</a>
// )
const anotheruser = "rajit and chai"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank' },'Visit google', anotheruser
)

createRoot(document.getElementById('root')).render(

  // reactElement
  <App/>
  
)
