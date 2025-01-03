import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import AddUser from './AddUser';  // Import the AddUser component
import UpdateUser from './UpdateUser';  // Import the UpdateUser component

const Mpage = () => {
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);  // State for handling Update User modal
    const [users, setUsers] = useState([]);
    const [userToUpdate, setUserToUpdate] = useState(null);  // State for storing user being updated

    const handleAddUserClick = () => {
        setShowAddUser(true);  // Show the AddUser component when the button is clicked
    };

    const handleCloseAddUser = () => {
        setShowAddUser(false);  // Hide the AddUser component when closed
    };

    const handleCloseUpdateUser = () => {
        setShowUpdateUser(false);  // Hide the UpdateUser component when closed
        setUserToUpdate(null);  // Clear the user data when closed
    };

    // Add a new user to the list
    const addUser = (newUser) => {
        const newUserWithId = { id: users.length + 1, ...newUser };
        setUsers([...users, newUserWithId]);  // Update the state with the new user
    };

    // Update a user in the list
    const updateUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
        handleCloseUpdateUser();  // Close the UpdateUser component
    };

    // Delete a user from the list
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));  // Remove user by id
    };

    // Handle update click
    const handleUpdateClick = (user) => {
        setUserToUpdate(user);  // Set the user to be updated
        setShowUpdateUser(true);  // Show the UpdateUser component
    };

    return (
        <>
            <div className='w-full h-auto'>
                <header className='w-full h-auto py-16 bg-blue-400 text-white text-4xl flex justify-center items-center'>
                    THIS IS ALL USERS
                </header>
                <nav className='bg-green-200 flex justify-end'>
                    <button
                        className='bg-red-500 rounded-xl text-white  px-4 py-1 my-4 mr-3 flex items-center'
                        onClick={handleAddUserClick}
                    >
                        <FaPlus /> Add user
                    </button>
                </nav>
                <section className='w-full h-auto bg-yellow-200 flex justify-center items-center '>
                    <table className='w-[1500px]'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Action</th>
                                <th>Action2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.salary}</td>
                                    <td>
                                        <button 
                                            onClick={() => deleteUser(user.id)} 
                                            className="bg-red-500 text-white rounded px-2 py-1"
                                        >
                                            Delete
                                        </button>
                                    </td>   
                                    <td>
                                        <button 
                                            onClick={() => handleUpdateClick(user)} 
                                            className="bg-blue-500 text-white rounded px-2 py-1"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Conditionally render the AddUser and UpdateUser components */}
                {showAddUser && <AddUser onClose={handleCloseAddUser} addUser={addUser} />}
                {showUpdateUser && <UpdateUser onClose={handleCloseUpdateUser} user={userToUpdate} updateUser={updateUser} />}
            </div>
        </>
    );
};

export default Mpage;


import React, { useState } from 'react';

const AddUser = ({ onClose, addUser }) => {
    const [user, setUser] = useState({ name: '', salary: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add user to the main page state
        addUser(user);
        onClose();  // Close the AddUser form after submission
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-6 text-center">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={user.salary}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded-md w-full mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add User
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-red-500 py-2 px-4 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;



import React, { useState, useEffect } from 'react';

const UpdateUser = ({ onClose, user, updateUser }) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setSalary(user.salary);
        }
    }, [user]);

    const handleUpdate = () => {
        if (name && salary) {
            updateUser({ ...user, name, salary: parseInt(salary) });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Update User</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Salary:</label>
                    <input 
                        type="number" 
                        value={salary} 
                        onChange={(e) => setSalary(e.target.value)} 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between">
                    <button 
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Update
                    </button>
                    <button 
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
