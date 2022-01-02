import logo from './logo.svg';
import alphasdklogo from './alphasdklogo.svg'
import ReadexPro from './ReadexPro.ttf'
import './App.css';

function SPrintln(input) {
  console.log(input);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={alphasdklogo} className="App-logo" alt="logo" />
        <h1 id="MainText">
          Welcome to the Alpha SDK homepage !
        </h1>
        <a id="site" href="https://chatter-droid.github.io">
          Go to my main website !
        </a>
        <a id="download" href="https://github.com/chatter-droid/Alpha/releases/download/v1.0/Alpha.zip">
          Download the Alpha SDK
        </a>
        <p id="username">
          Alpha SDK by Chatter Droid 🤖
        </p>
      </header>
    </div>
  );
}

export default App;
