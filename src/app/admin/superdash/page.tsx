 'use client';

import React from 'react';

const SuperAdminPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome, Super Admin!</h1>
        <p className="text-gray-700 mb-6">
          You have full control over the platform. Use the sidebar to manage admins and users.
        </p>

        {/* Admin dashboard links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a href="#" className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow">
            Dashboard
          </a>
          <a href="#" className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow">
            Manage Admins
          </a>
          <a href="#" className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow">
            User Requests
          </a>
          <a href="#" className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow">
            Approved Users
          </a>
          <a href="#" className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow">
            System Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPage;
