import React,{useState} from 'react'

export const User = ({user,users,setUsers,handleDelete}) => {
	const{fname,lname,email,id}=user

	const[deleting,setDeleting]=useState(false)

	const deleteUser=(id,users)=>{
		setDeleting(true)
		setTimeout(()=>{
		const newList=handleDelete(id,users)
		setUsers(newList)
		setDeleting(false)
		},3000)		
	}
	
	const buttonText=deleting ? 'Deleting user ...' : 'Delete'

  return (
	<div className='px-2 grid grid-cols-4 even:bg-white odd:bg-slate-100'>
				<div className=''> <span>{fname}</span></div>
		<div className=''> <span>{lname}</span></div>
		<div className=''><span>{email}</span></div>
		<div>
		<span className='text-green-600 pr-2 cursor-pointer'>Edit</span>
			<span className='text-slate-500'>|</span>
			<span className='text-red-600 pl-2 cursor-pointer' onClick={()=>deleteUser(id,users)}>{buttonText}</span>
			</div>		
	</div>
  )
}

export default User