import { useState } from "react";
import { v4 as uuid } from 'uuid';

export const useUsers=(user,setUser)=>{
	const[users,setUsers]=useState([])
	const handleSubmit=()=>{
		console.log('Submitted')
		const id=uuid()
		const userList=[...users,{...user,id:id}]		
		setUsers(userList)
		setUser({fname:'',lname:'',email:'',password:'',confirm:''})	
	}
	return {users,setUsers,handleSubmit}
}