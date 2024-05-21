import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import Layout from './Layout';
import HomePage from '../components/HomePage';
import AvatarFormPage from '../components/AvatarFormPage';
import DailyPage from '../components/DailyPage/DailyPage';

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
        element: <AvatarFormPage />,
      },
      {
        path: "/daily",
        element: <DailyPage />,
      },
      {
        path: "/*",
        element: <h1>Feature coming soon!</h1>,
        // element: <FooterPage/>,
      },
    ],
  },
]);
