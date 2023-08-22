import React from 'react'

export const Button = ({text,handleSubmit}) => {
  return (
	<button className='py-3 rounded w-full flex justify-center bg-blue-600 text-blue-50 px-3 py-1 border-2 border-blue-200' onClick={handleSubmit}>{text}</button>
  )
}

