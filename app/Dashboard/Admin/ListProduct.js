"use client";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import productsData from "../../data/products.json";

export default function ListProduct() {
  const [statuses, setStatuses] = useState(
    productsData.map(() => "received") // Default all statuses to 'received'
  );

  const [actions, setActions] = useState(
    productsData.map(() => "edit") // Default all actions to 'edit'
  );

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

  const headerStyle = {
    backgroundImage:
      "linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e)",
    color: "white",
    textAlign: "center",
    padding: "8px 0",
  };

  const statusStyle = (status) => {
    switch (status) {
      case "received":
        return {
          backgroundColor: "#cccccc",
          color: "black",
          borderRadius: "8px",
          padding: "4px 12px",
        };
      case "inProgress":
        return {
          backgroundImage:
            "linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e)",
          color: "white",
          borderRadius: "8px",
        };
      case "done":
        return {
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "8px",
          padding: "4px 12px",
        };
      default:
        return {};
    }
  };

  const actionStyle = (action) => {
    switch (action) {
      case "edit":
        return {
          backgroundImage:
            "linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e)",
          color: "white",
          borderRadius: "8px",
        };
      case "delete":
        return {
          backgroundImage:
            "linear-gradient(to right top, #b22929, #c44227, #d45b23, #e2731f, #ee8c1a)",
          color: "white",
          borderRadius: "8px",
        };
      case "disable":
        return {
          backgroundColor: "#808080", // Gray background
          color: "white",
          borderRadius: "8px",
        };
      default:
        return {};
    }
  };

  return (
    <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
      <Paper
        elevation={3}
        className="p-6 mx-auto mt-4 border border-gray-300 shadow-lg"
        style={{ width: "900px", backgroundColor: "#f9f9f9", padding: "16px" }}
      >
        <h3 className="text-lg font-bold mb-4">Products On Menu</h3>
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
                      padding: "2px 10px", // Reduced padding to reduce height
                      height: "30px", // Reduced height of the dropdown
                      textAlign: "center",
                      fontSize: "12px", // Reduced font size for actions dropdown
                    }}
                  >
                    <MenuItem value="edit">Edit</MenuItem>
                    <MenuItem value="delete">Delete</MenuItem>
                    <MenuItem value="disable">Disable</MenuItem> {/* New menu item */}
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </div>
  );
}
