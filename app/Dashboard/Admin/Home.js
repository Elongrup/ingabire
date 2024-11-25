import Link from "next/link";

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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BarChart } from '@mui/x-charts/BarChart';
import usersData from '../../data/users.json';
import productsData from '../../data/products.json';


export default function Home() {
    return (
      <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg"
      style={{
        marginLeft: "15px", // Add left margin to the container
        marginRight: "20px", // Add right margin to the container
      }}
      >
       <div>
       <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 400, height: 150 } }}>
  {/* Products Box */}
  <Paper
  elevation={3}
  className="bg-white border rounded-lg shadow-lg"
  style={{
    padding: '24px', // Increased padding inside Paper
    display: 'flex', // Ensure the content is arranged using flexbox
    flexDirection: 'column', // Stack items vertically
    gap: '24px', // Add larger space between the sections inside Paper
    alignItems: 'center', // Center-align the children horizontally
    justifyContent: 'center',
  }}
>
  <div className="flex items-center" style={{ marginBottom: '14px' }}>
    {/* Heading with icon */}
    <h3 className="font-semibold text-black p-2 rounded-lg" style={{ marginRight: '200px' }}>
      Products
    </h3>
    <button
      style={{
        background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
      }}
      className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs"
    >
      <AddIcon className="mr-2" />
      Add
    </button>
  </div>

  {/* Products count section */}
  <div className="flex items-center gap-2">
    <AddShoppingCartIcon
      fontSize="small"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-full text-white"
      style={{
        background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
      }}
    />
    <span
     style={{
      fontSize: '24px', // Increased font size
      fontWeight: 'bold', // Make it bold
      color: 'black', // Set text color
      textAlign: 'center', // Align text to center
      display: 'inline-block', // Ensure it behaves like an inline block for better alignment
    }}>
      3,000</span>
  </div>
</Paper>





  {/* Claims Box */}
  <Paper
  elevation={3}
  className="bg-white border rounded-lg shadow-lg"
  style={{
    padding: '24px', // Increased padding inside Paper
    display: 'flex', // Ensure the content is arranged using flexbox
    flexDirection: 'column', // Stack items vertically
    gap: '24px', // Add larger space between the sections inside Paper
    alignItems: 'center', // Center-align the children horizontally
    justifyContent: 'center',
  }}
>
  <div className="flex items-center" style={{ marginBottom: '14px' }}>
    {/* Heading with icon */}
    <h3 className="font-semibold text-black p-2 rounded-lg" style={{ marginRight: '200px' }}>
      Claims
    </h3>
    <button
      style={{
        background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
      }}
      className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs"
    >
      <VisibilityIcon  className="mr-2" />
      View
    </button>
  </div>

  {/* Products count section */}
  <div className="flex items-center gap-2">
    <HelpOutlineIcon
      fontSize="small"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-full text-white"
      style={{
        background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
      }}
    />
    <span
     style={{
      fontSize: '24px', // Increased font size
      fontWeight: 'bold', // Make it bold
      color: 'black', // Set text color
      textAlign: 'center', // Align text to center
      display: 'inline-block', // Ensure it behaves like an inline block for better alignment
    }}>
      3,000</span>
  </div>
</Paper>

</Box>
</div>

                
                <div
                style={{
                  marginLeft: "40px", // Add left margin to the container
                  marginRight: "0px", // Add right margin to the container
                }}>
                <center>
                    <h3 className="mb-2 p-4">Orders in last 30 days</h3>
                  </center>
                  </div>

                <div className=" flex justify-between items-center"
                style={{
                  marginLeft: "10px", // Add left margin to the container
                  marginRight: "0px", // Add right margin to the container
                }}>
                  
                  <Paper elevation={3} className="rounded-lg overflow-hidden p-4 w-[30%] mx-auto">
                    <BarChart
                      xAxis={[{ scaleType: 'band', data: ['12 May 2024', '13 May 2024', '14 May 2024', '15 May 2024', '16 May 2024', '17 May 2024', '18 May 2024', '19 May 2024', '20 May 2024', '21 May 2024', '22 May 2024', '23 May 2024', '24 May 2024', '25 May 2024'] }]}
                      series={[{ data: [50, 100, 300, 200, 1000, 500, 600, 800, 700, 900, 400], color: '#791FFF' }]}
                      width={900}
                      height={300}
                    />
                  </Paper>
                </div>
               
              </div>
            )}
        

  