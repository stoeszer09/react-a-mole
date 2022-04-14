import React, {useEffect} from 'react'
import mole from '../images/mole.png'

function Mole(props) {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 4000 + 1000)
    let timer = setTimeout(() => {
      props.setDisplayMole(false)
      props.setScore(props.score - 1)
    }, randomSeconds)
    return () => clearTimeout(timer)
  })

  return (
    <div>
      <img src={mole} onClick={props.bopped} />
    </div>
  )
}

export default Mole