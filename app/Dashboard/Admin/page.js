"use client";
import { useState } from 'react';
import Header from '../../components/Header'; // Fixed header
import Sidebar from '../../components/Sidebar';
import AddUser from './AddUser';
import AddProduct from './AddProduct';
import ListProduct from './ListProduct';
import Home from './Home';
import ListOfOrders from './ListOfOrders';
import Reports from './Reports';

export default function AdminDashboard() {
  const [selectedContent, setSelectedContent] = useState('home'); // Default to home

  // Define the sidebar links
  const links = [
    { label: 'Users', href: 'users' },
    { label: 'Role', href: 'role' },
    { label: 'Add Product', href: 'addProduct' },
    { label: 'List Products', href: 'listProducts' },
    { label: 'List Orders', href: 'listOrders' },
    { label: 'Reports', href: 'reports' },
    { label: 'Claims', href: 'claims' },
  ];

  // Handle selection of content
  const handleSelect = (href) => {
    setSelectedContent(href);
  };

  // Handle Home click to reset content to 'home'
  const handleHomeClick = () => {
    setSelectedContent('home');
  };

  // Render dynamic content based on selected link
  const renderContent = () => {
    switch (selectedContent) {
      case 'users':
        return <AddUser />;
      case 'role':
        return <div>Role Management Content</div>;
      case 'addProduct':
        return <AddProduct />;
      case 'listProducts':
        return <ListProduct />;
      case 'listOrders':
        return <ListOfOrders />;
      case 'reports':
        return <Reports />;
      case 'claims':
        return <div>Claims Content</div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header with Home button */}
      <Header onHomeClick={handleHomeClick} />

      {/* Content Area */}
      <div className="flex mt-16">
        {/* Sidebar */}
        <div className="w-1/4 px-4">
          <Sidebar links={links} onSelect={handleSelect} />
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 ml-6 p-6 bg-gray-50 shadow rounded-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
