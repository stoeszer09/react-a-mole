import React, {useEffect} from 'react'
import MoleHill from '../images/molehill.png'

function EmptySlot(props) {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
      props.setDisplayMole(true)
    }, randomSeconds)
    return () => clearTimeout(timer)
  })

  return (
    <div>
      <img src={MoleHill}/>
    </div>
  )
}

export default EmptySlot