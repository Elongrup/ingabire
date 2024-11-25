"use client";
import { useState } from "react";
import Header from "../../components/Header"; // Fixed header
import Sidebar from "../../components/Sidebar";
import AddUser from "./AddUser";
import AddProduct from "./AddProduct";
import ListProduct from "./ListProduct";
import Home from "./Home";
import ListOfOrders from "./ListOfOrders";
import Reports from "./Reports";

export default function AdminDashboard() {
  const [selectedContent, setSelectedContent] = useState("home"); // Default to home

  // Define the sidebar links
  const links = [
    { label: "Users", href: "users" },
    { label: "Role", href: "role" },
    { label: "Add Product", href: "addProduct" },
    { label: "List Orders", href: "listOrders" },
    { label: "Reports", href: "reports" },
    { label: "Claims", href: "claims" },
  ];

  // Handle selection of content
  const handleSelect = (href) => {
    setSelectedContent(href);
  };

  // Handle Home click to reset content to 'home'
  const handleHomeClick = () => {
    setSelectedContent("home");
  };

  // Render dynamic content based on selected link
  const renderContent = () => {
    switch (selectedContent) {
      case "users":
        return <AddUser />;
      case "role":
        return <div>Role Management Content</div>;
      case "addProduct":
        return <AddProduct />;
      case "listOrders":
        return <ListOfOrders />;
      case "reports":
        return <Reports />;
      case "claims":
        return <div>Claims Content</div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen ml-9">
      {/* Content Area */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 p-4 bg-white shadow rounded-lg mr-4">
            <Sidebar links={links} onSelect={handleSelect} />
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 p-6 bg-gray-50 shadow rounded-lg" style={{ maxWidth: "100%",
             marginLeft: "15px", // Add left margin to the container
             marginRight: "20px", // Add right margin to the container
          }}>
            <div className="sticky top-0 z-10 bg-white shadow-md mb-4">
              <Header onHomeClick={handleHomeClick} />
            </div>
            {renderContent()}
          </div>
        </div>
     
    </div>
  );
}
