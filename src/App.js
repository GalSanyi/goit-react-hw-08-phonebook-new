import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'routes/HomePage';
import { getCurrentUser } from 'redux/auth/auth-operations';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import NoMatch from 'routes/NoMatch';
const Contacts = lazy(() => import('routes/Contacts'));
const Login = lazy(() => import('routes/Login'));
const Registration = lazy(() => import('routes/Registration/registration'));


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<PublicRoute restricted>
              <HomePage />
            </PublicRoute> } />

            <Route path="/contacts" element={<PrivateRoute>
                <Contacts />
            </PrivateRoute> } />

            <Route path='/registration' element={<PublicRoute restricted>
              <Registration />
            </PublicRoute> } />

            <Route path='/login' element={<PublicRoute restricted>
              <Login />
            </PublicRoute> } />
            
            <Route path='*' element={<NoMatch />} />
            
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

