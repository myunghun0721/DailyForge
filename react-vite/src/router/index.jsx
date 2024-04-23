import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import HomePage from '../components/HomePage';
import AvatarPage from '../components/AvatarPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginFormPage/>,
      },
      {
        path: "/homepage",
        element: <HomePage/>,
      },
      {
        path: "/avatar",
        element: <AvatarPage />,
      },
      {
        path: "/*",
        element: <h1>Page Not Found</h1>,
      },
    ],
  },
]);
