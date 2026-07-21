"use client";
import { useState } from 'react';
import { fetchCardDetails } from '../../utils/apicall';
import { useRouter } from 'next/navigation';


export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleLoginError = (errorMsg) => {
    setError(errorMsg || 'Login failed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setError(''); // Clear any previous error

    try {
      const data = await fetchCardDetails(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`, 'POST', { username, password });
      localStorage.setItem('token', data.token);
      
      // Dispatch custom event to notify Header of login
      window.dispatchEvent(new Event('loginSuccess'));
      
      router.push('/dashboard');
    } catch (error) {
      handleLoginError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          disabled={isLoading} // Disable input during loading
          style={{
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: isLoading ? '#f5f5f5' : '#fff', // Gray out when loading
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          disabled={isLoading} // Disable input during loading
          style={{
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: isLoading ? '#f5f5f5' : '#fff', // Gray out when loading
          }}
        />
        <button
          type="submit"
          disabled={isLoading} // Disable button during loading
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: isLoading ? '#ccc' : '#007BFF', // Gray when loading
            color: '#fff',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#007BFF')}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {isLoading && (
        <p style={{ marginTop: '10px', color: '#666' }}>Please wait...</p>
      )}
      {error && !isLoading && (
        <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
      )}
    </div>
  );
}