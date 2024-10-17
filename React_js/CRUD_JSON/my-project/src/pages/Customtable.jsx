import React, { useState } from "react";

const usersJsonData = [
  {
    id: 1,
    firstName: "Karn",
    lastName: "Yong",
    email: "karn.yong@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=1",
    Gender: "Female",
    age: 35,
    location: "America"

  },
  {
    id: 2,
    firstName: "Ivy",
    lastName: "Cal",
    email: "ivy.cal@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=2",
    Gender: "Male",
    age: 23,
    location: "America"
  },
  {
    id: 3,
    firstName: "Walter",
    lastName: "Beau",
    email: "walter.beau@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=3",
    Gender: "Female",
    age: 13,
    location: "America"
  },
  {
    id: 4,
    firstName: "Gayla",
    lastName: "Bertrand",
    email: "gayla.bertrand@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=4",
    Gender: "Female",
    age: 79,
    location: "America"
  },
  {
    id: 5,
    firstName: "Benjamin",
    lastName: "Chaz",
    email: "benjamin.chaz@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=5",
    Gender: "Male",
    age: 51,
    location: "America"
  },
];

export default function UserTable() {
  const [users, setUsers] = useState(usersJsonData);

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
      age: prompt("Enter The Your Age:"),
      Gender: prompt("Enter The Your Gender:"),
      location: prompt("Enter The Your Location:"),
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4 animate-roll-in-left">
      <h1 className="text-2xl font-bold mb-4 text-center">Users</h1>
      <hr /><br />
      <button
        onClick={createNewUse}
        className="animated-button mb-4"
      >
        Create
      </button>
      <table className="min-w-full bg-white border border-gray-400">
        <thead>
          <tr className="bg-blue-600 text-white font-mono py-2">
            <th className="py-2" id="idno">Id</th>
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
              <td className="py-2 text-center">{user.firstName}</td>
              <td className="py-2 text-center">{user.lastName}</td>
              <td className="py-2 text-center text-indigo-700">{user.email}</td>
              <td className="py-2 text-center">{user.Gender}</td>
              <td className="py-2 text-center">{user.age}</td>
              <td className="py-2 text-center">{user.location}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => editUser(user.id)}
                  className="animated-button mr-3 "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="animated-button2"
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
