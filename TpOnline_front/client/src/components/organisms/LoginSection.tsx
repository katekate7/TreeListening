//LoginSection.tsx
import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection: React.FC = () => {
  return (
    <div> 
      <h1 className="text-2xl font-bold text-center mb-6"><p>Log In</p></h1>
      <LoginForm />
      <div className="mt-4 text-center">
        <button 
          onClick={() => {}}
          className="text-blue-600 hover:underline focus:outline-none"
        >
         <p>Forgot your password?</p>
        </button>
      </div>
    </div>
  );
};

export default LoginSection;