import { render,fireEvent,waitFor,act } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App"
import User from "../components/User"


jest.useFakeTimers();
test('should render App correctly',()=>{
   const{getByText,getByPlaceholderText}=render(<App/>)
   const welcomeText=getByText(/new user registration/i)
   expect(welcomeText).toBeInTheDocument()
   expect(getByPlaceholderText(/enter firstname/i)).toBeInTheDocument()
   expect(getByPlaceholderText(/enter lastname/i)).toBeInTheDocument()
   expect(getByPlaceholderText(/enter email/i)).toBeInTheDocument()  
})

test('The form fields should be empty',()=>{
	const{getByPlaceholderText}=render(<App/>)
	const firstnameField=getByPlaceholderText(/enter firstname/i)
	expect(firstnameField.value).toBe('')
	fireEvent.change(firstnameField,{target:{value:'Andrew'}})
	expect(firstnameField.value).toBe('Andrew')
 })

 test('Should logout message when button is clicked',()=>{
	const handleClickMock=jest.fn()	
	const consoleSpy=jest.spyOn(console,'log')
	const{getByText}=render(<App />)
	const submitButton=getByText(/submit/i)
	expect(submitButton).toBeInTheDocument()
	fireEvent.click(submitButton)
	// expect(handleClickMock).toHaveBeenCalledTimes(1)
	expect(console.log).toHaveBeenCalledWith('Submitted')
	consoleSpy.mockRestore()   
 })

 test('Should render the user correctly',()=>{
	const user={fname:'Andrew',lname:'James',email:'andjjkj',id:'1111'}
	const users=[{fname:'Awele',lname:'Mundi',email:'andjjkj',id:'2222'},{fname:'Lauren',lname:'Paris',email:'andjjkj',id:'jkdfhfhf'},{fname:'Paul',lname:'Scones',email:'andjjkj',id:'3333'}]
	const setUsersMock=jest.fn()
	const handleDeleteMock=jest.fn()
	const{getByText}=render(<User user={user} users={users} setUsers={setUsersMock} handleDelete={handleDeleteMock}/>)
	expect(getByText('Andrew')).toBeInTheDocument()
	expect(getByText('James')).toBeInTheDocument()
	expect(getByText('andjjkj')).toBeInTheDocument()	
 })

 test('Should show the delete button',()=>{
	const user={fname:'Andrew',lname:'James',email:'andjjkj',id:'1111'}
	const users=[{fname:'Awele',lname:'Mundi',email:'andjjkj',id:'2222'},{fname:'Lauren',lname:'Paris',email:'andjjkj',id:'jkdfhfhf'},{fname:'Paul',lname:'Scones',email:'andjjkj',id:'3333'}]
	const setUsersMock=jest.fn()
	const handleDeleteMock=jest.fn()
	const{getByText}=render(<User user={user} users={users} setUsers={setUsersMock} handleDelete={handleDeleteMock}/>)
	expect(getByText('Delete')).toBeInTheDocument()
	
 })

 test('Should show the "Deleting user on button click"',async()=>{
	const user={fname:'Andrew',lname:'James',email:'andjjkj',id:'1111'}
	const users=[{fname:'Awele',lname:'Mundi',email:'andjjkj',id:'2222'},{fname:'Lauren',lname:'Paris',email:'andjjkj',id:'jkdfhfhf'},{fname:'Paul',lname:'Scones',email:'andjjkj',id:'3333'}]
	const setUsersMock=jest.fn()
	const handleDeleteMock=jest.fn()
	const{getByText}=render(<User user={user} users={users} setUsers={setUsersMock} handleDelete={handleDeleteMock}/>)
	const deleteButton=getByText('Delete')
	fireEvent.click(deleteButton)
	expect(await getByText('Deleting user ...')).toBeInTheDocument()	
 })


 
 describe('User component', () => {
   it('should call handleDelete and setUsers after timeout', async () => {
	 const mockUser = {
	   id: 123,
	   fname: 'John',
	   lname: 'Doe',
	   email: 'john@example.com',
	 };
 
	 const mockUsers = [	  
	   mockUser,
	 ];
 
	 const mockHandleDelete = jest.fn();
 
	 const mockSetUsers = jest.fn();
 
	 const { getByText } = render(
	   <User user={mockUser} users={mockUsers} setUsers={mockSetUsers} handleDelete={mockHandleDelete} />
	 );
 
	 const deleteButton = getByText('Delete');
 
	 await act(async () => {
		fireEvent.click(deleteButton);		
		jest.advanceTimersByTime(3000);
		await waitFor(() => {
		  expect(mockHandleDelete).toHaveBeenCalledWith(mockUser.id, mockUsers);
		  expect(mockSetUsers).toHaveBeenCalled();		 
		});
	  });
	});
  });
 