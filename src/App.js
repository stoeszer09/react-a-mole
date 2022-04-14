import React, { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
        key={i}
        setScore={setScore}
        score={score} />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div>
      <h1>React-A-Mole!</h1>
      <h2>Score: {score}</h2>
      {createMoleHill()}
    </div>
  );
}

export default App;
