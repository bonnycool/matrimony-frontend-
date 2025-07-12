'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    console.log(formData);
    alert('Registration successful! You can complete your profile after login.');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-green-700 text-center">Quick Sign Up</h2>

        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded" />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />

        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />

        <div className="flex gap-4">
          <label><input type="radio" name="gender" value="male" onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="female" onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="other" onChange={handleChange} /> Other</label>
        </div>

        <input type="date" name="dob" onChange={handleChange} className="w-full p-2 border rounded" />

        <button type="button" onClick={handleRegister} className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
}
