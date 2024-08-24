import React, { useState, useEffect } from "react";


export default function UserTable2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3000/usersJsonData")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const updatedEmail = prompt("Enter new email:");
    if (updatedEmail) {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, email: updatedEmail } : user
        )
      );
    }
  };

  const createNewUse = () => {
    const newUser = {
      id: users.length + 1,
      firstName: prompt("Enter first name:"),
      lastName: prompt("Enter last name:"),
      email: prompt("Enter Email:"),
      age: prompt("Enter Your Age:"),
      Gender: prompt("Enter The Your Gender:"),
      location: prompt("Enter Your Location:"),
      Image: `https://i.pravatar.+cc/150?u=${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4 animate-roll-in-left">
      <h1 className="text-3xl font-bold mb-4 text-center">Users</h1>
      <hr />
      <br />
      <button onClick={createNewUse} className="bg-gray-300 p-2 rounded mb-4">
        Create
      </button>
      <table className="min-w-full bg-white border border-gray-400">
        <thead>
          <tr className="bg-blue-600 text-white font-mono py-2">
            <th className="py-2">Id</th>
            <th className="py-2">Imge</th>
            <th className="py-2">FirstName</th>
            <th className="py-2">LastName</th>
            <th className="py-2">Email</th>
            <th className="py-2">Gender</th>
            <th className="py-2">Age</th>
            <th className="py-2">Location</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-gray-300">
              <td className="py-2 text-center">{user.id}</td>
              <td className="py-2 text-center">
                <img src={user.Image} className="rounded-full w-10 h-10 ml-8" />
              </td>
              <td className="py-2 text-center">{user.firstName}</td>
              <td className="py-2 text-center">{user.lastName}</td>
              <td className="py-2 text-center text-indigo-700">{user.email}</td>
              <td className="py-2 text-center">{user.Gender}</td>
              <td className="py-2 text-center">{user.age}</td>
              <td className="py-2 text-center">{user.location}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => editUser(user.id)}
                  className="bg-gray-300 mr-3 button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-[rgb(250,164,52)] hover:bg-[#ff0000] duration-1000 text-black hover:text-white button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
