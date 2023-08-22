import React from 'react'
import { InputField } from './components/Input.jsx'
import { Button } from './components/Button.jsx'
import { useUser } from './hooks/useUser.js'
import { useUsers } from './hooks/useUsers.js'
import Header from './components/Header.jsx'
import UserList from './components/UserList.jsx'
import { handleDelete } from './functions.js'

const App = () => {		
	const{user,setUser,handleChange}=useUser()
	const{fname,lname,email}=user
	const{users,setUsers,handleSubmit}=useUsers(user,setUser)	
	
  return (
	<div className='w-full grid grid-cols-3 gap-4 mt-4 px-3 '>
		<div className=' shadow shadow-slate-500 px-3 pt-3  bg-slate-100 '>
		<Header/>
		<InputField value={fname} name={'fname'} placeholder={'Enter FirstName'} id='user-fname' label={'First Name'} type='text' handleChange={handleChange}/>
		<InputField value={lname} name={'lname'} placeholder={'Enter LastName'} id='user-lname' label={'Last Name'} type='text' handleChange={handleChange}/>
		<InputField value={email} name={'email'} id='user-email' placeholder={'Enter Email'} label={'Email Address'} type='email' handleChange={handleChange}/>		
		<div className='md:col-span-1 py-3'>
		<Button text='Submit' handleSubmit={handleSubmit}/>
		</div>
	</div>
	<UserList users={users} setUsers={setUsers} handleDelete={handleDelete} />
	</div>
  )
}

export default App