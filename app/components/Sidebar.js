"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Paper from "@mui/material/Paper";
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportIcon from '@mui/icons-material/Report';

export default function Sidebar({ links, role, onSelect }) {
  const [selectedButton, setSelectedButton] = useState(null); // Track the selected button
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = (buttonKey) => {
    setSelectedButton(buttonKey); // Set the currently selected button
    onSelect(buttonKey); // Trigger the onSelect callback
  };
  const handleSwitchAccount = () => {
    setDropdownVisible(!isDropdownVisible); // Toggle the dropdown visibility
  };

  const handleAccountChange = (account) => {
    console.log("Switching to account:", account);
    setDropdownVisible(false); // Hide the dropdown after selection
  };
  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
  };

  const buttonStyle = (buttonKey) => ({
    color: 'black',
    backgroundImage:
      selectedButton === buttonKey
        ? 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)'
        : 'none', // Gradient for selected buttons
    WebkitBackgroundClip: selectedButton === buttonKey ? 'text' : 'none',
    WebkitTextFillColor: selectedButton === buttonKey ? 'transparent' : 'black', // Black when not selected
    color: 'black',// Fallback for unsupported browsers
    display: "flex", // Ensure button is a flex container
    justifyContent: "start", // Align content to the left
    alignItems: "center", // Vertically align the content (text + icon)
    width: "100%", // Make all buttons take equal width
    padding: "10px 14px", // Reduced padding for consistency
    border: "none", // Remove default button border
    borderRadius: "5px", // Rounded corners
    marginBottom: "0px", // Reduced space between buttons
    
  });

  return (
    <div
    style={{
      marginLeft: "15px", // Add left margin to the container
      marginRight: "0px", // Add right margin to the container
    }}>
      <div className="sidebar p-6 w-64 bg-gray-100 shadow-lg m-4">
        <Paper
          elevation={1}
          className="border border-gray-300 rounded-lg mb-6"
          style={{
            maxWidth: "300px", 
            height: "96vh",  // Set height to cover the screen
            padding: "10px", 
            display: "flex",  // Use flexbox to position elements
            flexDirection: "column", // Stack elements vertically
            justifyContent: "space-between"  // Distribute space evenly between sections
          }}
        >
          <div>
            <button
              style={{
                background: "linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "24px",
                display: "flex", // Ensuring the button is displayed as a flex container
                justifyContent: "center", // Center content horizontally
                alignItems: "center", // Center content vertically
                width: "100%", // Ensure button is stretched to full width
              }}
            >
              Elon grup
            </button>
          </div>
          {/* Buttons Section */}
          <div className="button-section">
            <button
              style={buttonStyle("users")}
              onClick={() => handleClick("users")}
            >
              <PeopleIcon fontSize="small" className="mr-2"  />
              Users
            </button>
            <button
              style={buttonStyle("addProduct")}
              onClick={() => handleClick("addProduct")}
            >
              <AddShoppingCartIcon fontSize="small" className="mr-2"  />
              Products
            </button>
            <button
              style={buttonStyle("listOrders")}
              onClick={() => handleClick("listOrders")}
            >
              <ListAltIcon fontSize="small" className="mr-2"  />
              Orders
            </button>
            <button
              style={buttonStyle("reports")}
              onClick={() => handleClick("reports")}
            >
              <ReportIcon fontSize="small" className="mr-2" />
              Reports
            </button>
            <button
             style={buttonStyle("claims")}
             onClick={() => handleClick("claims")}
             className="flex items-center" // Ensures proper alignment of the icon and text
            >
             <AssignmentIcon fontSize="small" className="mr-2" /> {/* Add `mr-2` for spacing */}
              Claims
             </button>
          </div>

          {/* Profile Section */}
          <div className="profile-section mt-6">
      <div className="flex justify-center">
        <button
          className="relative w-16 h-16 rounded-full overflow-hidden"
          onClick={handleSwitchAccount}
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <Image
            src="/1.jpg" // Replace with actual profile image URL
            alt="Profile"
            width={64}
            height={64}
            layout="intrinsic"
            objectFit="cover"
            style={{ borderRadius: "50%" }} // Makes image circular
          />
        </button>
        {isDropdownVisible && (
          <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-48">
            <div className="px-4 py-2">
              {/* Title for the dropdown */}
              <div className="font-semibold text-base mb-2">Switch Account</div>

              {/* Account 1 option */}
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleAccountChange("Account 1")}
              >
                <Image
                  src="/1.jpg" // Replace with actual profile image URL for Account 1
                  alt="Account 1"
                  width={24}
                  height={24}
                  layout="intrinsic"
                  objectFit="cover"
                  style={{ borderRadius: "50%", marginRight: "8px" }} // Profile image
                />
                Account 1
              </button>

              {/* Account 2 option */}
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleAccountChange("Account 2")}
              >
                <Image
                  src="/1.jpg" // Replace with actual profile image URL for Account 2
                  alt="Account 2"
                  width={24}
                  height={24}
                  layout="intrinsic"
                  objectFit="cover"
                  style={{ borderRadius: "50%", marginRight: "8px" }} // Profile image
                />
                Account 2
              </button>

              {/* Account 3 option */}
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleAccountChange("Account 3")}
              >
                <Image
                  src="/1.jpg" // Replace with actual profile image URL for Account 3
                  alt="Account 3"
                  width={24}
                  height={24}
                  layout="intrinsic"
                  objectFit="cover"
                  style={{ borderRadius: "50%", marginRight: "8px" }} // Profile image
                />
                Account 3
              </button>

              {/* Logout button */}
              <div className="mt-2">
                <button
                  className="w-full px-4 py-2 text-white rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
        </Paper>
      </div>
    </div>
  );
}
