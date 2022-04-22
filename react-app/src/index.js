import React from 'react';
import ReactDOM from 'react-dom';
//import * as ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Users from './components/users'

/* Attempt to change to the new API introduced in react 18: getting error container is not dom item
ReactDOM.createRoot(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/
//const container = document.getElementById('app');
// Create a root.
//const root = ReactDOM.createRoot(container);
// Initial render: Render an element to the root.
//root.render(<App/>);

ReactDOM.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
