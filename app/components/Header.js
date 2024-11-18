"use client";
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';

export default function Header({ onHomeClick }) {
  return (
    <div>
      <Paper elevation={3} className="p-4">
        <div className="flex space-x-4">
          <button
            className="text-lg flex items-center p-2 rounded-lg"
            style={{
              backgroundImage:
                'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            onClick={() => onHomeClick()} // Handle the Home click
          >
            <HomeIcon fontSize="small" className="mr-2" />
            Home
          </button>
        </div>
      </Paper>
    </div>
  );
}
