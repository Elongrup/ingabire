"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Paper from "@mui/material/Paper";

export default function Sidebar({ links, role, onSelect }) {
  const [selectedButton, setSelectedButton] = useState(null); // Track the selected button

  const handleClick = (buttonKey) => {
    setSelectedButton(buttonKey); // Set the currently selected button
    onSelect(buttonKey); // Trigger the onSelect callback
  };

  const buttonStyle = (buttonKey) => ({
    backgroundColor: selectedButton === buttonKey ? "gray" : "transparent", // Gray if selected
    color: selectedButton === buttonKey ? "white" : "black", // White text if selected
  });

  return (
    <div>
      <div className="sidebar p-6 w-64 bg-gray-100 shadow-lg m-4">
        <Paper
          elevation={1}
          className="border border-gray-300 rounded-lg mb-6"
          style={{
            maxWidth: "200px", 
            height: "96vh",  // Set height to cover the screen
            padding: "20px", 
            display: "flex",  // Use flexbox to position elements
            flexDirection: "column", // Stack elements vertically
            justifyContent: "space-between"  // Distribute space evenly between sections
          }}
        >
          <div>
            <center>
            <button
  style={{
    background: "linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "24px",
  }}
>
  Elon grup
</button>
</center>
          </div>
          {/* Buttons Section */}
          <div className="button-section">
            
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-2"
              style={buttonStyle("users")}
              onClick={() => handleClick("users")}
            >
              Users
            </button>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-2"
              style={buttonStyle("role")}
              onClick={() => handleClick("role")}
            >
              Role
            </button>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-2"
              style={buttonStyle("addProduct")}
              onClick={() => handleClick("addProduct")}
            >
              Add Product
            </button>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-2"
              style={buttonStyle("listProducts")}
              onClick={() => handleClick("listProducts")}
            >
              List Products
            </button>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-2"
              style={buttonStyle("listOrders")}
              onClick={() => handleClick("listOrders")}
            >
              List Of Orders
            </button>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-2"
              style={buttonStyle("reports")}
              onClick={() => handleClick("reports")}
            >
              Reports
            </button>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full mb-6"
              style={buttonStyle("claims")}
              onClick={() => handleClick("claims")}
            >
              Claims
            </button>
          </div>

          {/* Profile Section */}
          <div className="profile-section mt-6">
            <div className="flex justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/1.jpg" // Replace with actual profile image URL
                  alt="Profile"
                  width={64} // Set width
                  height={64} // Set height
                  layout="intrinsic"
                  objectFit="cover" 
                  style={{ borderRadius: "50%" }} // Makes image circular
                />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
