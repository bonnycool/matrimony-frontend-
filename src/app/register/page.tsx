 'use client';

import { useState, useRef } from 'react';
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

  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    console.log('Sending OTP to:', formData.email);
    setShowOtpPopup(true);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    alert('Registration successful! You can complete your profile after login.');
    router.push('/login');
  };

  const handleResendOtp = () => {
    console.log('Resending OTP to:', formData.email);
    alert('OTP has been resent to your email.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 relative">
      {/* Sign up form */}
      {!showOtpPopup && (
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-green-700 text-center">Quick Sign Up</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <div className="flex gap-4">
            <label>
              <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" onChange={handleChange} /> Other
            </label>
          </div>

          <input
            type="date"
            name="dob"
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
      )}

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-80 px-6 py-6 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enter OTP sent to your email
            </h3>

            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el!)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  maxLength={1}
                  className="w-9 h-10 text-center border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white font-medium py-2 rounded hover:bg-green-700 transition"
            >
              Verify OTP
            </button>

            <p className="text-sm text-gray-600 mt-3">
              Didn't get OTP?{' '}
              <button
                onClick={handleResendOtp}
                className="text-blue-600 underline hover:text-blue-800"
              >
                Resend OTP
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
