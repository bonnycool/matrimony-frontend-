 'use client';

import React, { useState } from 'react';

interface ApprovedUser {
  id: number;
  name: string;
  email: string;
  gender: string;
  approvedOn: string;
}

const ApprovedUsersPage: React.FC = () => {
  const [approvedUsers, setApprovedUsers] = useState<ApprovedUser[]>([
    {
      id: 1,
      name: 'Fida',
      email: 'fida@matrimony.de',
      gender: 'Female',
      approvedOn: '2025-07-11',
    },
    {
      id: 2,
      name: 'Bonny',
      email: 'bonny@matrimony.de',
      gender: 'Male',
      approvedOn: '2025-07-12',
    },
  ]);

  const handleRemove = (id: number) => {
    const updatedList = approvedUsers.filter(user => user.id !== id);
    setApprovedUsers(updatedList);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Approved Users</h1>

      <table className="w-full bg-white shadow-md rounded">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Gender</th>
            <th className="p-4 text-left">Approved On</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {approvedUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.gender}</td>
              <td className="p-4">{user.approvedOn}</td>
              <td className="p-4">
                <button
                  onClick={() => handleRemove(user.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {approvedUsers.length === 0 && (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">
                No approved users left.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedUsersPage;
