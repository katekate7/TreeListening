//LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../api/endpoints/auth';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/slices/authSlice';
import Input from '../atoms/Input';
import Button from '../atoms/Button';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayConnected, setStayConnected] = useState(false); // État pour la case à cocher
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials(userData));
      navigate('/modules');
      console.log("Connected successfully.");
    } catch (err) {
      console.error('Failed to log in:', err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="rememberMe"
          checked={stayConnected}
          onChange={(e) => setStayConnected(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="stayConnected" className="text-gray-700"><p>Remember me</p></label>
      </div>
      <div className="flex justify-center">
        <Button label={isLoading ? 'Connection...' : 'Log in'} type="submit" disabled={isLoading} />
      </div>
    </form>
  );
};

export default LoginForm;