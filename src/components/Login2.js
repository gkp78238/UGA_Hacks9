import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//MYtest@test.com
//password
const Login = () => {
  const [users, setUsers] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:3001/register').then((res) => {
      console.log(res.data);
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
      const token = response.data.token;
      alert('Login successful');
      setUsername('');
      setPassword('');
      fetchUsers();
      navigate('authenticatedview');
      window.location.reload();
      localStorage.setItem('token', token);
    } catch (error) {
      console.log('Login Error');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="user"
            placeholder="user"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-submit-button">
          Login
        </button>
        <div className="alternative">
          <span>OR</span>
        </div>
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="signup-button"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;