'use client';

import React, { ReactNode, use } from 'react';

interface LayoutProps {
  children: ReactNode;
  params: Promise<{
    username: string;
  }>;
}

export default function UserDashboardLayout({ children, params }: LayoutProps) {
  const { username } = use(params); // ✅ unwraps the promise

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">German Matrimony</h1>
        <span className="text-sm text-gray-600">Logged in as: {username}</span>
      </header>

      <main className="flex-grow p-6">{children}</main>

      <footer className="bg-white shadow p-4 text-center text-sm text-gray-500">
        &copy; 2025 German Matrimony. All rights reserved.
      </footer>
    </div>
  );
}
