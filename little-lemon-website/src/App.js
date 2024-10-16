import React from 'react'
import './App.css';
import './Styles/Nav.css';
import './Styles/Header.css';
import Nav from './Components/Nav';
import Head from './Components/Head';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {BrowserRoutrer as Router, Rout} from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Head />
      <Main />
      <Footer />
    </>
  );
}

export default App;
