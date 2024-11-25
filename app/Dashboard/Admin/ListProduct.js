"use client";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import the tick icon
import productsData from "../../data/products.json";

export default function AddProduct() {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [statuses, setStatuses] = useState(productsData.map(() => "received"));
  const [actions, setActions] = useState(productsData.map(() => "edit"));
  const [showMessage, setShowMessage] = useState(false); // State for the success message

  const handleAddUserClick = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  const handleStatusChange = (event, index) => {
    const updatedStatuses = [...statuses];
    updatedStatuses[index] = event.target.value;
    setStatuses(updatedStatuses);
  };

  const handleActionChange = (event, index) => {
    const updatedActions = [...actions];
    updatedActions[index] = event.target.value;
    setActions(updatedActions);
  };

  const handleSave = (event) => {
    event.preventDefault(); // Prevent default form submission
    setShowMessage(true); // Show the success message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };

  const headerStyle = {
    backgroundImage:
      'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
    color: "white",
    textAlign: "center",
    padding: "8px 0",
  };

  const actionStyle = (action) => {
    switch (action) {
      case "edit":
        return {
          backgroundImage: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
          color: "white",
          borderRadius: "8px",
        };
      case "delete":
        return {
          backgroundImage: "linear-gradient(to right top, #b22929, #c44227, #d45b23, #e2731f, #ee8c1a)",
          color: "white",
          borderRadius: "8px",
        };
      case "disable":
        return {
          backgroundColor: "#808080",
          color: "white",
          borderRadius: "8px",
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      {showAddUserForm ? (
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100vh', // Full height of the viewport
          backgroundColor: '#f9f9f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Paper elevation={3} style={{ width: '800px', padding: '16px', position: 'relative' }}>
            <form className="mb-4" onSubmit={handleSave}>
              <h4 className="font-semibold mb-2">New Product</h4>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex-1">
                  <label className="block mb-1 text-gray-500">Name</label><br />
                  <input type="text" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#791FFF' }} />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 text-gray-500">Ingredients</label><br />
                  <input type="text" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#791FFF' }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex-1">
                  <label className="block mb-1 text-gray-500">Price/Rwf</label><br />
                  <input type="text" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#791FFF' }} />
                </div>
                <div className="flex-1 w-1/2">
                  <label className="block mb-1 text-gray-500">Category</label><br />
                  <input type="text" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#791FFF' }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex-1">
                  <label className="block mb-1 text-gray-500">Product Image</label><br />
                  <input type="file" accept="image/*" className="w-3/4 p-2 border rounded-md mb-2" style={{ borderColor: '#791FFF' }} />
                </div>
              </div>
              <div className="flex mt-2">
                <button
                  type="submit"
                  className="mt-4 p-2 text-white rounded-md hover:opacity-90 transition active:bg-yellow-500"
                  style={{
                    width: '180px',
                    height: '35px',
                    backgroundImage: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
                  }}
                >
                  Save
                </button>
              </div>
            </form>
            {/* Overlay Division Box */}
            {showMessage && (
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                zIndex: 10,
                borderRadius: "8px",
              }}>
                <CheckCircleIcon style={{ color: "green", fontSize: "48px", marginBottom: "10px" }} />
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>Product added successfully!</span>
              </div>
            )}
          </Paper>
        </div>
      ) : (
        <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
          <Paper
            elevation={3}
            className="p-6 mx-auto mt-4 border border-gray-300 shadow-lg"
            style={{ width: "900px", backgroundColor: "#f9f9f9", padding: "16px" }}
          >
            <div className="flex items-center justify-between mb-6 px-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-4">Products On Menu</h3>
              </div>
              <div>
                <button
                  onClick={handleAddUserClick}
                  style={{
                    color: 'black',
                    backgroundImage: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs"
                >
                  <AddIcon className="mr-1" />
                  Add product
                </button>
              </div>
            </div>
            <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead className="border-b">
                <tr>
                  <th style={headerStyle}>ID</th>
                  <th style={headerStyle}>Name</th>
                  <th style={headerStyle}>Ingredients</th>
                  <th style={headerStyle}>Price</th>
                  <th style={headerStyle}>Category</th>
                  <th style={headerStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product, index) => (
                  <tr key={product.id} className="text-center border-b">
                    <td className="py-2 px-4 border border-gray-300">{product.id}</td>
                    <td className="py-2 px-4 border border-gray-300">{product.name}</td>
                    <td className="py-2 px-4 border border-gray-300">{product.ingredients}</td>
                    <td className="py-2 px-4 border border-gray-300">{product.price}</td>
                    <td className="py-2 px-4 border border-gray-300">{product.category}</td>
                    <td className="py-2 px-4 border border-gray-300">
                      <Select
                        value={actions[index]}
                        onChange={(event) => handleActionChange(event, index)}
                        style={{
                          ...actionStyle(actions[index]),
                          width: "120px",
                          padding: "2px 10px",
                          height: "30px",
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        <MenuItem value="edit">Edit</MenuItem>
                        <MenuItem value="delete">Delete</MenuItem>
                        <MenuItem value="disable">Disable</MenuItem>
                      </Select>
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
