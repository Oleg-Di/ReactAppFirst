import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ContactState from './Context/ContactDropContext/ContactDropState';
import NavbarState from './Context/NavBarContext/navbarState';
import TraningsState from './Context/TranigsContext/tranigsState';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TraningsState>
    <NavbarState>
    <ContactState>
    <App />
    </ContactState>
    </NavbarState>
     </TraningsState>
 
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
