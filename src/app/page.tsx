'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to German Matrimony</h1>
      <p className="mb-8 text-gray-600 text-center max-w-md">
        A trusted platform for residents with valid permits to find meaningful connections.
      </p>
      <div className="flex gap-6">
        <button
          onClick={() => router.push('/register')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Register
        </button>
        <button
          onClick={() => router.push('/login')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
