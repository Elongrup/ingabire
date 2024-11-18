"use client";
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';  // Import AddIcon only once
import usersData from '../../data/users.json';
import Paper from '@mui/material/Paper';  // Assuming user data is in this file

export default function UserList() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);  // State to show/hide the Add User form

  // Toggle between showing the user list and the Add User form
  const handleAddUserClick = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  return (
    <div>

      {/* Conditionally Render the User List or Add User Form */}
      {showAddUserForm ? (
        // Add User Form
        <Paper elevation={3} className="p-6 mx-auto mt-4 border border-gray-300 shadow-lg" style={{ width: '800px', backgroundColor: '#f9f9f9', padding: '16px' }}>
                <form className="mb-4">
  {/* User Information Section */}
  <div className="mb-8"> {/* Increased margin bottom for more space */}
    <h4 className="font-semibold mb-4 items-center"
      style={{
        backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      User Information
    </h4>
    <div className="flex flex-wrap gap-4 mt-4 mb-4">
      <div className="flex-1">
        <label className="block mb-2 text-gray-500">Email Address</label><br/>
        <input type="email" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#FFD700' }} />
      </div>
      <div className="flex-1">
        <label className="block mb-2 text-gray-500">Phone Number</label><br/>
        <input type="number" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#FFD700' }} />
      </div>
    </div>
  </div>

  {/* Role & Permission Section */}
  <div className="mb-8"> {/* Additional spacing between sections */}
    <h4 className="font-semibold mb-4 items-center"
      style={{
        backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Role and Permission
    </h4>
    <div className="flex flex-wrap gap-4 mb-4">
    <div className="flex-1">
      <label className="block mb-1 text-gray-500">Username</label><br/>
      <input type="text" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#FFD700' }} />
    </div>
    <div className="flex-1 w-1/2">
      <label className="block mb-1 text-gray-500">Create Password</label><br/>
      <input type="password" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#FFD700' }} />
    </div>
    <div className="flex-1 w-1/2">
      <label className="block mb-1 text-gray-500">Confirm password</label><br/>
      <input type="password" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#FFD700' }} />
    </div>
  </div>
  
  {/* Button Container */}
  <div className="flex mt-2">
  <button
  type="submit"
  className="mt-4 p-2 text-white rounded-md hover:opacity-90 transition active:bg-yellow-500"
  style={{
    width: '180px',
    height: '35px', 
    backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
  }}
>
  Save 
</button>
</div>
  </div>
</form>

              </Paper>
      ) : (
        <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
              <Paper
                elevation={3}
                className="p-6 mx-auto mt-4 border border-gray-300 shadow-lg"
                style={{
                  width: '830px',
                  backgroundColor: '#f9f9f9',
                  padding: '16px',
                }}
              >
                <div className="flex items-center justify-between mb-6 px-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">List Of Users</h3>
                  </div>
                  <div>
                    <button
                      onClick={handleAddUserClick}
                      style={{
                        background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
                      }}
                      className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs"
                    >
                      <AddIcon className="mr-1" />
                      Add user
                    </button>
                  </div>
                </div>

                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                  <thead className="border-b">
                    <tr>
                      <th className="py-2 px-4 border border-gray-300">ID</th>
                      <th className="py-2 px-4 border border-gray-300">Username</th>
                      <th className="py-2 px-4 border border-gray-300">Email</th>
                      <th className="py-2 px-4 border border-gray-300">Role</th>
                      <th colSpan="2" className="py-2 px-4 border border-gray-300">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user) => (
                      <tr key={user.id} className="text-center border-b">
                        <td className="py-2 px-4 border border-gray-300">{user.id}</td>
                        <td className="py-2 px-4 border border-gray-300">{user.username}</td>
                        <td className="py-2 px-4 border border-gray-300">{user.email}</td>
                        <td className="py-2 px-4 border border-gray-300">{user.role}</td>
                        <td className="py-2 px-4 border border-gray-300">
                          <button
                            style={{
                              backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
                              color: 'white',
                              borderRadius: '8px',
                              width: '120px',
                            }}
                            className="px-3 py-1"
                          >
                            Edit
                          </button>
                        </td>
                        <td className="py-2 px-4 border border-gray-300">
                          <button
                            style={{
                              backgroundImage: 'linear-gradient(to right top, #b22929, #c44227, #d45b23, #e2731f, #ee8c1a, #f49125, #f9972e, #ff9c37, #ff9049, #ff865a, #ff7e69, #fb7878)',
                              color: 'white',
                              borderRadius: '8px',
                              width: '120px',
                            }}
                            className="px-3 py-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Paper>
</div>
       
       
      )}
    </div>
    
  );
}
