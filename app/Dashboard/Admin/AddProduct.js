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



export default function AddProduct() {
    return (
      <div>
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
      </div>
    );
  }
  