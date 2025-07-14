 'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function SuperAdminPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome, Super Admin!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <button
            onClick={() => router.push('/admin/superdash')}
            className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow"
          >
            Dashboard
          </button>

          <button
            onClick={() => router.push('/admin/superdash/manage-admins')}
            className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow"
          >
            Manage Admins
          </button>

          <button
            onClick={() => router.push('/admin/superdash/user-requests')}
            className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow"
          >
            User Requests
          </button>

          <button
            onClick={() => router.push('/admin/superdash/approved-users')}
            className="block text-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-4 px-6 rounded shadow"
          >
            Approved Users
          </button>
        </div>
      </div>
    </div>
  );
}
