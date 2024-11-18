"use client";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ReportIcon from "@mui/icons-material/Report";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

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

  const gradientTextStyle = {
    background: "linear-gradient(to right top, #b28529, #e7a41e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="sidebar p-6 w-64 bg-gray-100 shadow-lg m-4">
      {/* Manage Users Section */}
      <Paper elevation={1} className="p-4 border border-gray-300 rounded-lg mb-6">
      <h2 className="flex items-center font-semibold mb-2 text-white bg-clip-text" style={{ background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)' }}>
                <PersonIcon fontSize="small" className="mr-2" />
                Manage Users
              </h2>
        <ul className="space-y-2">
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("users")}
              onClick={() => handleClick("users")}
            >
              <PeopleIcon fontSize="small" className="mr-1" style={{ color: "#e7a41e" }} />
              Users
            </button>
          </li>
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("role")}
              onClick={() => handleClick("role")}
            >
              <LocalOfferIcon fontSize="small" className="mr-1" style={{ color: "#e7a41e" }} />
              Role
            </button>
          </li>
        </ul>
      </Paper>

      {/* Manage Products Section */}
      <Paper elevation={1} className="p-4 border border-gray-300 rounded-lg mb-6">
      <h2 className="flex items-center font-semibold mb-2 text-white bg-clip-text" style={{ background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)' }}>
                <ShoppingCartIcon fontSize="small" className="mr-2" />
                Manage Products
              </h2>
        <ul className="space-y-2">
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("addProduct")}
              onClick={() => handleClick("addProduct")}
            >
              <AddShoppingCartIcon
                fontSize="small"
                className="mr-1"
                style={{ color: "#e7a41e" }}
              />
              Add Product
            </button>
          </li>
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("listProducts")}
              onClick={() => handleClick("listProducts")}
            >
              <ListAltIcon fontSize="small" className="mr-1" style={{ color: "#e7a41e" }} />
              List Products
            </button>
          </li>
        </ul>
      </Paper>

      {/* Service Management Section */}
      <Paper elevation={1} className="p-4 border border-gray-300 rounded-lg">
      <h2 className="flex items-center font-semibold mb-2 text-white bg-clip-text" style={{ background: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)' }}>
                <ShoppingCartIcon fontSize="small" className="mr-2" />
                Service Management
              </h2>
        <ul className="space-y-2">
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("listOrders")}
              onClick={() => handleClick("listOrders")}
            >
              <ListAltIcon fontSize="small" className="mr-1" style={{ color: "#e7a41e" }} />
              List Of Orders
            </button>
          </li>
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("reports")}
              onClick={() => handleClick("reports")}
            >
              <ReportIcon fontSize="small" className="mr-1" style={{ color: "#e7a41e" }} />
              Reports
            </button>
          </li>
          <li>
            <button
              className="block py-2 px-4 hover:bg-gray-200 rounded w-full"
              style={buttonStyle("claims")}
              onClick={() => handleClick("claims")}
            >
              <AssignmentIcon fontSize="small" className="mr-1" style={{ color: "#e7a41e" }} />
              Claims
            </button>
          </li>
        </ul>
      </Paper>
    </div>
  );
}
