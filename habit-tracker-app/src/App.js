import logo from './logo.svg';
import './App.css';
import DanielleIntro from './DanielleIntro/DanielleIntro';

function App() {
  return (
    <div>
    <div className="Group-Intros">
      <DanielleIntro />
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
