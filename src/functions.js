export const handleDelete=(id,UserList)=>{	
	const leftUsers=UserList?.filter(person=>person.id !== id)
	return leftUsers
}