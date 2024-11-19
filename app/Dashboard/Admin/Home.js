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
import VisibilityIcon from '@mui/icons-material/Visibility';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { BarChart } from '@mui/x-charts/BarChart';
import usersData from '../../data/users.json';
import productsData from '../../data/products.json';


export default function Home() {
    return (
      <div className="flex-1 m-4 p-4 bg-white rounded-lg shadow-lg">
       
                <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 400, height: 150 } }}>
                  {/* Products Box */}
                  <Paper elevation={3} className="p-4">
                  <div className="flex items-center mt-8 gap-4">
  <h3 className="font-semibold mb-2 p-2 rounded-lg text-black bg-clip-text">
    Products
  </h3>
  <button
    style={{
      background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
    }}
    className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs"
  >
    <AddIcon className="mr-1" />
    Add
  </button>
</div>




<center>
<p>
  <AddShoppingCartIcon
    fontSize="small"
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-full text-white mr-2"
    style={{
      background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
    }}
  />
  3,000
</p>
</center>

                  </Paper>

                  {/* Claims Box */}
                  <Paper elevation={3} className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold mb-2 p-2 rounded-lg text-black bg-clip-text">
                        Claims
                      </h3>
                      <button
                         style={{
                          background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
                        }}
                        className="flex items-center justify-center p-2 text-white rounded-md hover:opacity-80 transition-opacity text-xs"
                      >
                        <HelpOutlineIcon 
                        fontSize="small"
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-full text-white mr-2"
                        style={{
                          background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
                        }}/>
                        Help
                      </button>
                    </div>
                    <p>
                      <AssignmentIcon 
                      fontSize="small"
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-full text-white mr-2"
                      style={{
                        background: 'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
                      }} />
                      1,200
                    </p>
                  </Paper>
                </Box>
                
                <div>
                <center>
                    <h3 className="mb-2 p-4">Orders in last 30 days</h3>
                  </center>
                  </div>

                <div className=" flex justify-between items-center">
                  
                  <Paper elevation={3} className="rounded-lg overflow-hidden p-4 w-[30%] mx-auto">
                    <BarChart
                      xAxis={[{ scaleType: 'band', data: ['12 May 2024', '13 May 2024', '14 May 2024', '15 May 2024', '16 May 2024', '17 May 2024', '18 May 2024', '19 May 2024', '20 May 2024', '21 May 2024', '22 May 2024', '23 May 2024', '24 May 2024', '25 May 2024'] }]}
                      series={[{ data: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], color: '#791FFF' }]}
                      width={900}
                      height={300}
                    />
                  </Paper>
                </div>
               
              </div>
            )}
        

  