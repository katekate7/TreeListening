// molecules/LoginForm.tsx
import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
 
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
 
  const handleLogin = () => {
    console.log('Login avec:', email, password, 'Keep logged in:', keepLoggedIn);
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
      <Button label="Se connecter" onClick={handleLogin} />
    </form>
  );
};
 
export default LoginForm;