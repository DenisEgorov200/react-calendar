import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from 'pages/Home.jsx';
import { Task } from 'pages/Task/Task.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/task/:date',
    element: <Task />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
