"use client";

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportIcon from '@mui/icons-material/Report';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { BarChart } from '@mui/x-charts/BarChart';
import usersData from '../../data/users.json';
import productsData from '../../data/products.json';

export default function AdminDashboard() {
  const [isClient, setIsClient] = useState(false);
  const [content, setContent] = useState("dashboard");
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleUsersClick = () => {
    setContent("users");
    setShowAddUserForm(false);
    setShowAddProductForm(false);
    setActiveButton('users');
  };

  const handleAnotherButtonClick = () => {
    setActiveButton(null);
  };

  const handleHomeClick = () => {
    setContent("dashboard");
    setShowAddUserForm(false);
    setShowAddProductForm(false);
  };

  const handleAddUserClick = () => {
    setShowAddUserForm(true);
    setShowAddProductForm(false);
  };

  const handleAddProductClick = () => {
    setShowAddProductForm(true);
    setShowAddUserForm(false);
  };
  const handleListProductsClick = () => {
    setContent("products");
    setShowAddUserForm(false);
    setShowAddProductForm(false);
    setActiveButton('products');
  };

  return (
    <div className="w-[100%] flex ml-4 h-screen bg-white">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Header Section */}
        <Paper elevation={3} className="rounded-lg overflow-hidden p-4 mx-auto mb-6">
          <div className="flex space-x-4">
            <button
              
              className="text-lg flex items-center p-2 rounded-lg"
              style={{ color: content === "dashboard" ? '#e7a41e' : '#000' }}
            >
              <HomeIcon fontSize="small" className="mr-2" />
              Home
            </button>

            <p className="mr-4 flex space-x-20" style={{ backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Company Name</p>
            <center className="flex space-x-20">
              <h3 className="flex space-x-20">Welcome </h3>
            </center>
          </div>
        </Paper>

        <main className="w-[100%] flex flex-col md:flex-row items-center justify-center bg-gray-100 rounded-lg p-4">
          <div className="m-4 p-4 bg-white rounded-lg shadow-lg space-y-2">
            {/* Manage Users Box */}
            <Paper elevation={1} className="p-4 border border-gray-300 rounded-lg mb-4">
              <h2 className="flex items-center font-semibold mb-2 text-white bg-clip-text" style={{ background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)' }}>
                <PersonIcon fontSize="small" className="mr-2" />
                Manage Users
              </h2>
              <div className="space-y-2">
              <button
        className="flex items-center justify-center p-2 rounded-md hover:bg-gray-300 transition-colors "
      >
        <PeopleIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
        Users
      </button>
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-300 transition-colors"
        >
       
                  <LocalOfferIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
                  Role
                </button>
               
              </div>
            </Paper>

        
            <Paper elevation={1} className="p-4 border border-gray-300 rounded-lg mb-4">
              <h2 className="flex items-center font-semibold mb-2 text-white bg-clip-text" style={{ background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)' }}>
                <ShoppingCartIcon fontSize="small" className="mr-2" />
                Manage Products
              </h2>
              <div className="space-y-2">
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-300 transition-colors" onClick={handleAddProductClick}>
                  <AddShoppingCartIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
                  Add Products
                </button>
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-300 transition-colors" onClick={handleListProductsClick}>
                  <ListAltIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
                  List Products
                </button>
              </div>
            </Paper>

            {/* Service Management Box */}
            <Paper elevation={1} className="p-4 border border-gray-300 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="flex items-center font-semibold mb-2 text-white bg-clip-text" style={{ background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)' }}>
                  <AssignmentIcon fontSize="small" className="mr-2" />
                  Service Management
                </h2>
                <button className="flex items-center justify-center w-24 h-8 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <VisibilityIcon fontSize="small" className="mr-1" />
                  View
                </button>
              </div>
              <div className="space-y-2">
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-300 transition-colors">
                  <ListAltIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
                  List of Orders
                </button>
                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-300 transition-colors">
                  <ReportIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
                  Reports
                </button>
                <button className="flex items-center justify-center p-2  rounded-md hover:bg-gray-300 transition-colors">
                  <AssignmentIcon fontSize="small" className="mr-1" style={{ color: '#e7a41e' }} />
                  Claims
                </button>
              </div>
            </Paper>
          </div>

          <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
            {content === "users" && !showAddUserForm && !showAddProductForm ? (
              // User Table
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
            ) : null}

<div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
            {content === "products" && (
              <Paper elevation={3} className="p-6 mx-auto mt-4 border border-gray-300 shadow-lg" style={{ width: '800px', backgroundColor: '#f9f9f9', padding: '16px' }}>
                <h3 className="text-lg font-bold mb-4">List Of Products</h3>
                <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                  <thead className="border-b">
                    <tr>
                      <th className="py-2 px-4 border border-gray-300">ID</th>
                      <th className="py-2 px-4 border border-gray-300">Name</th>
                      <th className="py-2 px-4 border border-gray-300">Ingredients</th>
                      <th className="py-2 px-4 border border-gray-300">Price</th>
                      <th className="py-2 px-4 border border-gray-300">Category</th>
                      <th colSpan="2" className="py-2 px-4 border border-gray-300">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsData.map((product) => (
                      <tr key={product.id} className="text-center border-b">
                        <td className="py-2 px-4 border border-gray-300">{product.id}</td>
                        <td className="py-2 px-4 border border-gray-300">{product.name}</td>
                        <td className="py-2 px-4 border border-gray-300">{product.ingredients}</td>
                        <td className="py-2 px-4 border border-gray-300">{product.price}</td>
                        <td className="py-2 px-4 border border-gray-300">{product.category}</td>
                        <td className="py-2 px-4 border border-gray-300">
                          <button className="px-3 py-1 bg-green-500 text-white rounded-md">Edit</button>
                        </td>
                        <td className="py-2 px-4 border border-gray-300">
                          <button className="px-3 py-1 bg-red-500 text-white rounded-md">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Paper>
            )}
          </div>
            

            {showAddUserForm && !showAddProductForm && (
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
            )}

            {/* Add Product Form */}
            {showAddProductForm && !showAddUserForm && (
              <Paper elevation={3} className="p-6 mx-auto mt-4 border border-gray-300 shadow-lg" style={{ width: '800px', backgroundColor: '#f9f9f9', padding: '16px' }}>
  <form className="mb-4">
  <h4 className="font-semibold mb-2">New Product</h4>
  
  <div className="flex flex-wrap gap-4 mb-4">
    <div className="flex-1">
      <label className="block mb-1 text-gray-500">Name</label><br/>
      <input 
        type="text" 
        className="w-3/4 p-2 border rounded-md mb-2" 
        style={{ borderColor: '#FFD700' }} 
      />
    </div>
    <div className="flex-1">
      <label className="block mb-1 text-gray-500">Ingredients</label><br/>
      <input 
        type="text" 
        className="w-3/4 p-2 border rounded-md mb-2" 
        style={{ borderColor: '#FFD700' }} 
      />
    </div>
  </div>
  
  <div className="flex flex-wrap gap-4 mb-4">
    <div className="flex-1">
      <label className="block mb-1 text-gray-500">Price/Rwf</label><br/>
      <input 
        type="text" 
        className="w-3/4 p-2 border rounded-md mb-2" 
        style={{ borderColor: '#FFD700' }} 
      />
    </div>
    <div className="flex-1 w-1/2">
      <label className="block mb-1 text-gray-500">Category</label><br/>
      <input 
        type="text" 
        className="w-3/4 p-2 border rounded-md mb-2" 
        style={{ borderColor: '#FFD700' }} 
      />
    </div>
  </div>
  
  <div className="flex flex-wrap gap-4 mb-4">
    <div className="flex-1">
      <label className="block mb-1 text-gray-500">Product Image</label><br/>
      <input 
        type="file" 
        accept="image/*" 
        className="w-3/4 p-2 border rounded-md mb-2" 
        style={{ borderColor: '#FFD700' }} 
      />
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
</form>






              </Paper>
            )}

            {content === "dashboard" && !showAddUserForm && !showAddProductForm && (
              <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
                <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 400, height: 150 } }}>
                  {/* Products Box */}
                  <Paper elevation={3} className="p-4">
                    <div className="flex justify-between items-center mt-8">
                      <h3 className="font-semibold mb-2 p-2 rounded-lg text-black bg-clip-text">
                        Products
                      </h3>
                      <button
                        onClick={handleAddProductClick}
                        style={{
                          background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
                        }}
                        className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs ml-2"
                      >
                        <AddIcon className="mr-1" />
                        Add
                      </button>
                    </div>
                    <p className="mb-2 flex items-center" style={{ color: '#e7a41e' }}>
                      <AddShoppingCartIcon fontSize="small" />
                      3,000
                    </p>
                  </Paper>

                  {/* Claims Box */}
                  <Paper elevation={3} className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold mb-2 p-2 rounded-lg text-black bg-clip-text">
                        Claims
                      </h3>
                      <button
                        style={{
                          background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
                        }}
                        className="flex items-center justify-center p-1 text-white rounded-md hover:opacity-80 transition-opacity text-xs ml-2"
                      >
                        <HelpOutlineIcon className="mr-1" />
                        Help
                      </button>
                    </div>
                    <p className="mb-2 flex items-center" style={{ color: '#e7a41e' }}>
                      <AssignmentIcon fontSize="small" />
                      1,200
                    </p>
                  </Paper>
                </Box>

                <div>
                  <center>
                    <h3 className="mb-2 p-4">Orders in last 30 days</h3>
                  </center>
                  <Paper elevation={3} className="rounded-lg overflow-hidden p-4 w-[80%] mx-auto">
                    <BarChart
                      xAxis={[{ scaleType: 'band', data: ['12 May 2024', '13 May 2024', '14 May 2024', '15 May 2024', '16 May 2024', '17 May 2024', '18 May 2024', '19 May 2024', '20 May 2024', '21 May 2024', '22 May 2024', '23 May 2024', '24 May 2024', '25 May 2024'] }]}
                      series={[{ data: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], color: '#e7a41e' }]}
                      width={500}
                      height={300}
                    />
                  </Paper>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

