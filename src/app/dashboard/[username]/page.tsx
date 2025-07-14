'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PageProps {
  params: {
    username: string;
  };
}

export default function UserDashboard({ params }: PageProps) {
  const router = useRouter();
  const { username } = params;

  // Simulate fetched user data
  const user = {
    username,
    profileCompleted: false, // ❌ Change to true later to skip redirection
    isApproved: false,
  };

  // Redirect if profile is incomplete
  useEffect(() => {
    if (!user.profileCompleted) {
      router.push(`/dashboard/${username}/complete-profile`);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {username}</h1>
      <p>This is the user dashboard page.</p>
      <p>Status: {user.isApproved ? 'Approved' : 'Approval Pending'}</p>
    </div>
  );
}
