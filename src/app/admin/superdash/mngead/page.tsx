 'use client';

import React, { useState } from 'react';

interface Admin {
  name: string;
  email: string;
  role: string;
}

const ManageAdminsPage: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([
    { name: 'Fida', email: 'fida@matrimony.de', role: 'Admin' },
    { name: 'Bonny', email: 'bonny@matrimony.de', role: 'Admin' },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Add Admin
  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    const newAdmin: Admin = { name, email, role: 'Admin' };
    setAdmins([...admins, newAdmin]);
    setName('');
    setEmail('');
  };

  // Delete Admin
  const handleDeleteAdmin = (index: number) => {
    const updatedAdmins = admins.filter((_, i) => i !== index);
    setAdmins(updatedAdmins);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Manage Admins</h1>

      {/* Admins Table */}
      <table className="w-full bg-white shadow-md rounded mb-8">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-100">
              <td className="p-4">{admin.name}</td>
              <td className="p-4">{admin.email}</td>
              <td className="p-4">{admin.role}</td>
              <td className="p-4">
                <button
                  onClick={() => handleDeleteAdmin(idx)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Admin Form */}
      <form onSubmit={handleAddAdmin} className="bg-white p-6 shadow rounded max-w-md">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Add New Admin</h2>
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="email"
          value={email}
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          Add Admin
        </button>
      </form>
    </div>
  );
};

export default ManageAdminsPage;
