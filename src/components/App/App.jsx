import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'redux/auth/auth-operations';

import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';


export default function App() {
   const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.auth.isFetchingCurrentUser);

    useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return ( 
  <div className='container'>
    {isFetchingCurrentUser ? null : <Routes>
      
      <Route path='/' element={<Layout />}>
        <Route index element={<PublicRoute>
              <HomePage />
            </PublicRoute>} />
        <Route path='contacts' element={<PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>} />
        <Route path='login' element={<PublicRoute restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>} />
        <Route path='register' element={<PublicRoute restricted>
              <RegisterPage/>
            </PublicRoute>} />
  
        </Route>
      </Routes>}

      </div>

    );
};
 


