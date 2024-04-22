import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import ThemeProvider from './context/theme/provider.jsx'

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "products/:id",
        element: <Detail />,
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
