import React from 'react'

const LinkBtn = ({value, onHandleClick}) => {
  return (
    <div 
    className="p-1 border-2 border-blue-800 rounded-lg m-2 cursor-pointer transition-all 250ms ease-in-out hover:scale-105"
    onClick={onHandleClick}>
        {value}
    </div>
  )
}

export default LinkBtn