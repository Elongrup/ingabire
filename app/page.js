"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      router.push(`/Dashboard/${data.role}`);
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="flex h-screen rounded-lg overflow-hidden">
      <div className="hidden lg:flex w-1/2 items-center p-2">
        <Image src="/login.jpg" alt="Login Image" width={400} height={200} className="object-contain" />
      </div>

      <div className="flex-1 w-1/2 flex items-center justify-center bg-gradient-to-r from-[#b28529] to-[#efb443] p-6">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 m-4">
          <h1 className="text-3xl font-bold mb-4 text-center text-white p-4"
            style={{
              backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            Cutie menu
          </h1>
          <p className="text-xl font-bold text-center mb-6" style={{ color: '#B7B3B3' }}>
            The cutie menu sign in
          </p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4 flex items-center border rounded-md">
              <FontAwesomeIcon icon={faUser} className="text-yellow-500 p-2" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 appearance-none py-2 px-3 text-yellow-500 leading-tight focus:outline-none text-center placeholder-yellow-500"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6 flex items-center border rounded-md">
              <FontAwesomeIcon icon={faLock} className="text-yellow-500 p-2" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 appearance-none py-2 px-3 text-yellow-500 leading-tight focus:outline-none text-center placeholder-yellow-500"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md transition duration-300"
                style={{
                  backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
