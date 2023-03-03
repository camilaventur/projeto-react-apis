import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Detalhes } from './pages/detalhes/Detalhes';
import { Home } from './pages/Home.jsx/Home';
import { Pokedex } from './pokedex/pokedex';



const router = createBrowserRouter([
  {
    element: <App />, 
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/pokedex',
        element:<Pokedex/>
      },
      {
        path:'/detalhes/:name',
        element:<Detalhes/>
      },
    ],
  },
]);










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
