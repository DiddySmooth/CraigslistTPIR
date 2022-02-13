import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        <Navbar bg="light">
                <Nav.Link href="home">Home</Nav.Link>
        </Navbar>
        <Home />
    </div>
  );
}

export default App;
