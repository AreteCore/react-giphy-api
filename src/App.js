import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
// import React from 'react'
import {useState} from 'react'

function App() {
  //api key const
const KEY = process.env.REACT_APP_API_KEY
const [gif, setGif] = useState(null)

  return (
    <div className="App">
      <h1>React Giphy API Project</h1>
      <div><button>GET A GIF</button></div>
      <Display gif={gif}/>
    </div>
  );
}

export default App;
