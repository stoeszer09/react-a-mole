import React, {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
  let [displayMole, setDisplayMole] = useState(false)

  function bopped() {
    props.setScore(props.score + 1)
    setDisplayMole(false)
  }

  let moleOrNoMole = displayMole ? <Mole setDisplayMole={setDisplayMole} bopped={bopped} setScore={props.setScore} score={props.score} /> : <EmptySlot setDisplayMole={setDisplayMole} />
  
  let stylings = {
    display: 'inline-block',
    width: '30vw'
  }

  return (
    <div style={stylings}>
      {moleOrNoMole}
    </div>
  )
}

export default MoleContainer