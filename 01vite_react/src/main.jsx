import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element=(
  <a href='https://google.com'> visit</a>
);

const element2=React.createElement(
  'a',
  { href:'www.twitter.com',target:'_blank'},
  'click to visit twitter'
);

ReactDOM.createRoot(document.getElementById('root')).
render(
  <>
    <App />
    {element}<br></br>
    {element2}
    </>
  
)
