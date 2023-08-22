import React from 'react'

export const InputField = ({value,type,label,id,placeholder,name, handleChange}) => {	
  return (
	<div className='grid grid-cols-1  sm:grid-cols-3 '>
	<div className='border-b-[1px] border-slate-100 md:p-2'><label htmlFor={id}>{label}</label></div>
	<div className='sm:col-span-2 px-1 sm:py-1 border-none border-slate-100'>
		<input type={type} id={id} value={value} name={name} placeholder={placeholder} onChange={handleChange} className=' w-full bg-slate-200 px-2  h-full focus:bg-blue-100 focus:border-none' /></div>
	</div>
  )
}
