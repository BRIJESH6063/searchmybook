import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom' ;
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About' ;
import Booklist from './Component/Booklist/Booklist';
import Bookdetails from './Component/Boxdetails/Boxdetails' ;
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <Auth0Provider
    domain="dev-grrg0g7ew3e0y1w4.us.auth0.com"
    clientId="cSyZeI23VJ0TNa1DAZ05KNEwmtLtVOzp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >


  <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='book' element = {<Booklist/>} />
      <Route path='book/:id' element = {<Bookdetails/>} />
    </Routes>
    </BrowserRouter>
  </AppProvider>

  
  </Auth0Provider>




);


