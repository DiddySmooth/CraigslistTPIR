import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Play from './Pages/Play'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/play" element={<Play />}/>
        </Routes>
    </div>
  );
}

export default App;
