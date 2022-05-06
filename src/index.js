import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
    <Auth0Provider
      // domain="dev-0mk36-q6.us.auth0.com"
      // clientId="0YWUkYpAa8i6KidagmhLggowkNedhGe0"
      // redirectUri={window.location.origin}
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI}
    >
    <App />
    </Auth0Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
