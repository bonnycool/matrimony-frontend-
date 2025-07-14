'use client';

import React, { useState } from 'react';

interface UserRequest {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

const UserRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<UserRequest[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com', gender: 'Female', status: 'Pending' },
    { id: 2, name: 'John', email: 'john@example.com', gender: 'Male', status: 'Pending' },
    { id: 3, name: 'Ayesha', email: 'ayesha@example.com', gender: 'Female', status: 'Pending' },
  ]);

  const handleAction = (id: number, action: 'Approved' | 'Rejected') => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: action } : req
    );
    setRequests(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">User Registration Requests</h1>

      <table className="w-full bg-white shadow-md rounded mb-8">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Gender</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.gender}</td>
              <td className="p-4 font-semibold">{user.status}</td>
              <td className="p-4 flex gap-2">
                <button
                  onClick={() => handleAction(user.id, 'Approved')}
                  disabled={user.status !== 'Pending'}
                  className={`py-1 px-3 rounded text-white ${
                    user.status === 'Approved' ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(user.id, 'Rejected')}
                  disabled={user.status !== 'Pending'}
                  className={`py-1 px-3 rounded text-white ${
                    user.status === 'Rejected' ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRequestsPage;
