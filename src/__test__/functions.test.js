import { handleDelete } from "../functions";

describe('handleDelete function', () => {
  const userList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  it('should remove a user based on their ID', () => {
    const idToRemove = 2;
    const updatedUserList = handleDelete(idToRemove, userList);

    expect(updatedUserList).toHaveLength(userList.length - 1);
    expect(updatedUserList.some(user => user.id === idToRemove)).toBe(false);
  });

  it('should not modify the user list if ID is not found', () => {
    const idToRemove = 4; // Assuming this ID doesn't exist in the user list
    const updatedUserList = handleDelete(idToRemove, userList);

    expect(updatedUserList).toHaveLength(userList.length);
    expect(updatedUserList).toEqual(userList);
  });
});
