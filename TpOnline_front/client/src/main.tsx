import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Modules from './components/templates/Modules.tsx'
import LoginTemplate from './components/templates/LoginTemplate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginTemplate />,
  },
  {
    path: '/modules',
    element: <Modules />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);