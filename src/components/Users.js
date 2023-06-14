import React, { useState, useEffect } from 'react';
import Dashboard from '../Pages/Dashboard';

function Users() {
  const [data, setData] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    username: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    // Fetch users data from the server
    fetch("http://localhost/php/task-management/app/controllers/usersController.php", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const deleteUser = (userId) => {
    // Send DELETE request to the server to delete the user
    fetch("http://localhost/php/task-management/app/controllers/usersController.php", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // User deleted successfully, update the UI
          const updatedData = data.filter((user) => user.user_id !== userId);
          setData(updatedData);
        } else {
          console.error("Failed to delete user:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleEdit = (userId) => {
    const userToEdit = data.find((user) => user.user_id === userId);
    setEditingUserId(userId);
    setUpdatedUser({
      username: userToEdit.username,
      email: userToEdit.email,
      role: userToEdit.role,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Make PUT request to update user on the server
    fetch(`http://localhost/php/task-management/app/controllers/usersController.php?id=${editingUserId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server as needed
        // Update the user in the UI
        setData((prevState) =>
          prevState.map((user) => {
            if (user.user_id === editingUserId) {
              return {
                ...user,
                username: updatedUser.username,
                email: updatedUser.email,
                role: updatedUser.role,
              };
            }
            return user;
          })
        );
        setEditingUserId(null);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const renderForm = (userId) => {
    if (editingUserId === userId) {
      return (
        <tr key={userId}>
          <td className="px-6 py-4">{userId}</td>
          <td className="px-6 py-4">
            <input
              type="text"
              name="username"
              value={updatedUser.username}
              onChange={handleInputChange}
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="text"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
            />
          </td>
          <td className="px-6 py-4">
            <input
              type="text"
              name="role"
              value={updatedUser.role}
              onChange={handleInputChange}
            />
          </td>
          <td className="px-6 py-4">
            <button className="text-blue-600 dark:text-blue-500 hover:underline" onClick={handleUpdate}>
              Save
            </button>
            <button
              className="ml-2 text-red-600 dark:text-red-500 hover:underline"
              onClick={() => setEditingUserId(null)}
            >
              Cancel
            </button>
          </td>
        </tr>
        );
    }
}


  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr
                key={user.user_id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.user_id}
                </th>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                    {editingUserId === user.user_id ? (
                      renderForm(user.user_id)
                    ) : (
                      <button
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => handleEdit(user.user_id)}
                      >
                        Edit
                      </button>
                    )}
                  <button
                    onClick={() => deleteUser(user.user_id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <Dashboard users={data} /> */}
      </div>
    </div>
  );
}

export default Users;