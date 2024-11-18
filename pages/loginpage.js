// pages/login.js
import Image from 'next/image';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Division (Image) */}
      <div className="flex-1 bg-gray-200 relative">
        <Image 
          src="/login.jpg" // Replace with your image path
          alt="Login Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Right Division (Form) */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <form className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {/* Username Field */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Username"
                className="outline-none w-full"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="outline-none w-full"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
