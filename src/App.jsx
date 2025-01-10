import './App.css'
import { useEffect, useState } from 'react';
import Wordle from './Wordle';

function App() {
  const [solution, setSolution] = useState('');
  const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;
  console.log(BACKEND_ENDPOINT)
  useEffect(() => {
    fetch(BACKEND_ENDPOINT).then(res => res.json()).then(json => {
      console.log(json);
      setSolution(json);
    });
  }, [setSolution]);

  return (
    <>
      <h1>Zero Cooldown Wordle</h1>
      <p>Play Wordle an unlimited number of times</p>
      <div className="contentContainer">
        <Wordle solution={solution} />
      </div>
    </>
  )
}

export default App
