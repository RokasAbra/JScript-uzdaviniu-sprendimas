import { useState } from 'react';
import './App.css';
import randColor from './Functions/randColor';

const katinukai = ['Pilkis', 'Murkis', 'Rainius']

function App() {

    const [spalva, setSpalva] = useState('yellow');
    const [counter, setCounter] = useState(0);
    const [skaicius, setSkaicius] = useState(0);
    const [kvadratukai, setKvadratukai] = useState([]);
    const increase = () => {
        setCounter(count => count + 1);
        
    };
    const decrease = () => {
        setCounter(count => count - 1);
    };
    const reset = () => {
        setCounter(0)
    };
    const skaiciuotuvas = (ka) => setSkaicius ( s => s + ka);
    // const mygtukas = () =>
    // {
    //     console.log('As grazus mygtukas');
    //     return mygtukoBrolis;
    // }
    // const mygtukoBrolis = () =>
    // {
    //     console.log('As grazus mygtuko brolis');

    // }

    const beArgumentu = () => {
        console.log('As grazus mygtukas'); // 
    };
    const suArgumentu = (ka) => {
        console.log('suArgumentu: ' + ka); // 
    };
    const keistiSpalva = () => {
        // const nauja = spalva === 'yellow' ? 'orangered' : 'yellow' BLOGAI!!!! noudoti nebent aplikacija yra labai maza
        setSpalva(senojiSpalva => senojiSpalva === 'yellow' ? 'orangered' : 'yellow');

        // console.log(spalva);
    };
    const addKvadratukas = () => {
        setKvadratukai(k => [...k, randColor()] )
    };
    const remKvadratukas = () => {
        setKvadratukai( k => k.slice(1));
    }

  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{color: spalva}}>State {counter}</h1>
       <h1 style={{color: spalva}}>State {skaicius}</h1>
       <div className="kvadratukaiC">
       { 
            kvadratukai.map( (c, i) => <div className='kvadratukai' key={i} style={{backgroundColor:c}}> {i + 1}</div>)
       }
       </div>
       <button onClick={beArgumentu}>Be</button>
       <button onClick={() => suArgumentu('Labas')}>su</button>
       <button onClick={keistiSpalva}>Kita Spalva</button>
       <button onClick={increase}>+1</button>
       <button onClick={decrease}>-1</button>
       <button onClick={reset}>reset</button>
       <button onClick={() => skaiciuotuvas(1)}>+1</button>
       <button onClick={() => skaiciuotuvas(-1)}>-1</button>
       <button onClick={addKvadratukas}>ADD []</button>
       <button onClick={remKvadratukas}>Rem</button>
      </header>
    </div>
  );
};

export default App;