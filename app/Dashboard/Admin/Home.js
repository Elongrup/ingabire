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
       
                <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 500, height: 150 } }}>
                  {/* Products Box */}
                  <Paper elevation={3} className="p-4">
                    <div className="flex justify-between items-center mt-8">
                      <h3 className="font-semibold mb-2 p-2 rounded-lg text-black bg-clip-text">
                        Products
                      </h3>
                      <button
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
                  </div>

                <div className=" flex justify-between items-center">
                  
                  <Paper elevation={3} className="rounded-lg overflow-hidden p-4 w-[50%] mx-auto">
                    <BarChart
                      xAxis={[{ scaleType: 'band', data: ['12 May 2024', '13 May 2024', '14 May 2024', '15 May 2024', '16 May 2024', '17 May 2024', '18 May 2024', '19 May 2024', '20 May 2024', '21 May 2024', '22 May 2024', '23 May 2024', '24 May 2024', '25 May 2024'] }]}
                      series={[{ data: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], color: '#e7a41e' }]}
                      width={900}
                      height={300}
                    />
                  </Paper>
                </div>
               
              </div>
            )}
        

  