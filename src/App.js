import logo from './logo.svg';
import './App.css';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <h1>React Giphy API Project</h1>
      <div><button>GET A GIF</button></div>
      <Display />
    </div>
  );
}

export default App;
