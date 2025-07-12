'use client';

import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6">User Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded w-full max-w-sm mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded w-full max-w-sm mb-6"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </div>
  );
}
