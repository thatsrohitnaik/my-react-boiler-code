import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  makeServer from "./mock/index.ts";

// const environment = process.env.NODE_ENV;

// if (environment !== "production") {
//   makeServer();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <p>{environment}</p> */}
    <App />
  </React.StrictMode>,
)
