import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react' 
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Play from './Pages/Play'
import io from 'socket.io-client';

function App() {
    const [socket, setSocket] = useState<any>();
    const [message, setMessage] = useState("Hello")
    
    useEffect(() => {
        const newSocket: any = io(`${process.env.REACT_APP_BACKEND}`);
        setSocket(newSocket);
        return () => newSocket.close();
    }, [])
    console.log(socket)
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/play" element={<Play socket={socket}/>}/>
            </Routes>
        </div>
  );
}

export default App;
