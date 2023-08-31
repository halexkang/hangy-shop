import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RoueProvider,
  RouterProvider
} from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route index={ true } path='/' element={ <Home />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
