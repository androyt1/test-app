import { useState } from "react";

export const useUser=()=>{	
	const[user,setUser]=useState({
		fname:'',
		lname:'',
		email:'',		
	})	
	const handleChange=e=>{
		const{value,name}=e.target
		setUser({...user,[name]:value})
	}
	return {user,setUser,handleChange}
}