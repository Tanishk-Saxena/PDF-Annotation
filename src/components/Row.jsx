import React from 'react'

const Row = ({details}) => {
  const {x, y, height, width, btnClass} = details;
  return (
    <div className='row-container'>
      <span className='row-span'>x: {x},</span>
      <span className='row-span'>y: {y},</span>
      <span className='row-span'>height: {height}</span>
      <span className='row-span'>width: {width}</span>
      <button disabled className={btnClass+' row-btn'}>{btnClass.charAt(0).toUpperCase() + btnClass.slice(1)}</button>
    </div>
  )
}

export default Row