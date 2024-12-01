import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './store/slices/authSlice'; // Importing the token selector
import LoginTemplate from './components/templates/LoginTemplate';
import ModulesList from './routes/modules/ModuleList'; // Importing the component that displays modules
import Navbar from './components/atoms/Navbar';

const App: React.FC = () => {
  const token = useSelector(selectCurrentToken);  // Retrieves the authentication token from Redux state

  return (
    <Router>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={token ? <Navigate to="/modules" /> : <LoginTemplate />} />
        <Route 
          path="/modules" 
          element={token ? <ModulesList /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;