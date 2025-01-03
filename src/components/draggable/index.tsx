import React, { PropsWithChildren, useState } from 'react'

const Draggable = ({ children }: PropsWithChildren) => {
  const [{ x, y }, setPosition] = useState({
    x: 0,
    y: 0,
  })
  const mouseDownHandler = (clickEvent: React.MouseEvent) => {
    clickEvent.preventDefault() // 이미지 끌어당김 기본 기능 방지
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      console.log(`mouse move x:${moveEvent.clientX} y: ${moveEvent.clientY}`)

      const deltaX = moveEvent.clientX - clickEvent.clientX
      const deltaY = moveEvent.clientY - clickEvent.clientY

      setPosition({
        x: x + deltaX,
        y: y + deltaY,
      })
    }

    const mouseUpHandler = () => {
      console.log('mouse up detected')
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }

    // Mouse move and mouse up listeners
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler, { once: true })
  }

  return (
    <div
      onMouseDown={mouseDownHandler}
      style={{
        cursor: 'grab',
        // transform: `translateX(${x}px) translateY(${y}px)`,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  )
}

export default Draggable
