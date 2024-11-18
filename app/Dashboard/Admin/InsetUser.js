"use client";
import { useState } from 'react';
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

export default function AddUserForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add user, send to server, etc.
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-bold">Add New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm">Username</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Role</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md"
            value={role} 
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="chef">Chef</option>
            <option value="waiter">Waiter</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
      </form>
    </div>
  );
}
