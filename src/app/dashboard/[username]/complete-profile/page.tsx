'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function CompleteProfile() {
  const router = useRouter();
  const params = useParams();
  const username = params?.username as string;

  const [formData, setFormData] = useState({
  

    religion: '',
    location: '',
  
    education: '',
    height: '',
    weight: '',
    caste: '',
    job: '',
  });

  const [photo, setPhoto] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    console.log('Photo:', photo);

    router.push(`/dashboard/${username}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Complete Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
      
        <input type="text" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="height" placeholder="Height" value={formData.height} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="caste" placeholder="Caste" value={formData.caste} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="job" placeholder="Job / Profession" value={formData.job} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handlePhotoChange} className="w-full p-2 border rounded" />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Submit Profile
        </button>
      </form>
    </div>
  );
}
