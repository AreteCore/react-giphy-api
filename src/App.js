import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
// import React from 'react'
import {useState} from 'react'

function App() {
  //api key const
const KEY = process.env.REACT_APP_API_KEY
const [gif, setGif] = useState(null)

async function handleClick() {
let response = await fetch(
`https://api.giphy.com/v1/gifs/random?api_key=${KEY}&tag=bobs+burgers&rating=r`
)
response = await response.json()
// console.log(response)
setGif(response)
}

  return (
    <div className="App">
      <div>
        <h1>React Giphy API Project</h1>
        <Button handleClick={handleClick} />
        {/* <div><button onClick={handleClick}>GIF ME, DOG!</button></div> */}
        <Display gif={gif} handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
