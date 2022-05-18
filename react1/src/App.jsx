// import logo from './logo.svg';
import './App.css';
import Hello  from "./Components/009/Hello";
import Lokis from './Components/009/Lokis';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva="green" bg="yellow"/>
        <Hello spalva="black" bg="red"/>
        <Hello spalva="grey" bg="blue"/>
        <Lokis skaicius={4}/>
      </header>
    </div>
  );
}

export default App;


{/* <img src={logo} className="App-logo" alt="logo" />
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
</a> */}