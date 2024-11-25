"use client";
import Paper from "@mui/material/Paper";

export default function Header({ onHomeClick }) {
  return (
    <div
      style={{
        marginLeft: "20px", // Add left margin to the container
        marginRight: "20px", // Add right margin to the container
      }}
    >
      <Paper
        elevation={3}
        className="p-4"
        style={{
          height: "10vh", // Set height to cover the screen
          padding: "20px",
        }}
      >
        <div
          className="flex items-center"
          style={{
            gap: "500px", // Increase the gap between the items
            width: "100%", // Ensure the container takes up full width
          }}
        >
          <h1
            style={{
              margin: "0", // Remove margin from h1
              fontSize: "1.5rem",
            }}
          >
            HOTEL NAME
          </h1>
          <h3
            style={{
              margin: "0", // Remove margin from h3
              fontSize: "1rem",
            }}
          >
            Welcome [Admin Name]
          </h3>
        </div>
      </Paper>
    </div>
  );
}
