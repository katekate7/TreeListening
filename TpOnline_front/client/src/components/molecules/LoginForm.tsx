// molecules/LoginForm.tsx
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import { useLoginMutation } from '../../api/endpoints/auth';

interface ErrorResponse {
  status: number;
  data: {
    message: string; 
  };
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const response = await login({ email, password }).unwrap();
      const token = response.token;

      if (keepLoggedIn && token) {
        localStorage.setItem('token', token);
      }

      console.log('Connexion réussie', response);
    } catch (err) {
      console.error('Erreur de connexion:', err);
    }
  };

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Checkbox
        label="Keep me logged in"
        checked={keepLoggedIn}
        onChange={(e) => setKeepLoggedIn(e.target.checked)}
      />
      <Button
        label={isLoading ? 'Connexion...' : 'Se connecter'}
        onClick={handleLogin}
      />
      {isError && (
        <p className="text-red-500">
          {error && 'status' in error ? (
            `Error: ${(error as ErrorResponse).data?.message || 'Erreur inconnue'}`
          ) : (
            'Erreur inconnue'
          )}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
