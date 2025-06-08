'use client'

import { useEffect } from 'react'
import './Cube.css'

export default function StackCube() {
 useEffect(() => {
  const cube = document.querySelector('.cube')
  let angleX = 0
  let angleY = 0
  let rotating = true

  const rotate = () => {
    if (!rotating) return
    angleX += 0.4
    angleY += 0.6
    cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
    requestAnimationFrame(rotate)
  }

  rotate()
  return () => { rotating = false }
}, [])


  return (
    <div className="w-full flex justify-center my-16">
      <div className="scene">
        <div className="cube">
          <div className="face face-front"></div>
          <div className="face face-back"></div>
          <div className="face face-right"></div>
          <div className="face face-left"></div>
          <div className="face face-top"></div>
          <div className="face face-bottom"></div>
        </div>
      </div>
    </div>
  )
}
