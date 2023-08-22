import React from 'react'
import User from './User.jsx'
import { handleDelete } from '../functions.js'

export  const UserList = ({users,setUsers,handleDelete}) => {
  return (
	<div className=' w-full shadow grid col-span-2 content-start h-screen'>
		<div className='px-2 grid grid-cols-4'>	
				<div className='font-semibold'> <span>First Name</span></div>
		<div className='font-semibold'> <span>Last Name</span></div>
		<div className='font-semibold'><span>Email Address</span></div>
		<div>
			<span>Action</span>
		</div>
		</div>		
	<div className=''>
	{users?.map(user=>(< User key={user.id} user={user} users={users} setUsers={setUsers} handleDelete={handleDelete}/>))}
	</div>
	</div>
  )
}

export default UserList