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
    <div className="flex h-screen rounded-lg overflow-hidden"
    style={{
      marginLeft: "20px", // Add left margin to the container
      marginRight: "200px", // Add right margin to the container
    }}>
      <div className="hidden lg:flex w-1/2 items-center p-2">
        <Image src="/login.jpg" alt="Login Image" width={400} height={200} className="object-contain" />
      </div>
      <div className="flex-1 w-1/2 flex items-center justify-center bg-gradient-to-r from-[#b28529] to-[#efb443] p-6">
  <div
    className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 m-4 border border-gray-300"
    style={{
      borderRadius: '20px', // Rounded corners
      padding: '2rem', // Padding inside the division
      paddingLeft: '2rem',
    }}
  >
    <h1
      className="font-bold mb-4 text-center p-6"
      style={{
        fontSize: '3rem',
        backgroundImage:
          'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Elon Menu
    </h1>

    <p
      className="text-xl font-bold text-center mb-6"
      style={{ color: '#B7B3B3',
        fontSize: '1.5rem',
      }}
    >
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
            backgroundImage:
              'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
          }}
        >
          Sign in
        </button>
      </div>
    </form>
    <div style={{margin: '20px',

    }}>
        <p>
  Don't you have an account{' '}
  <span
    style={{
      backgroundImage:
        'linear-gradient(90deg, rgba(121,31,255,1) 0%, rgba(244,172,255,1) 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Sign up
  </span>
</p>
        </div>
  </div>
</div>


    </div>
  );
}
