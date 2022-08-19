import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated } from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation';
// import s from './AppBar.module.css';
import AuthNav from 'routes/AuthNav';
import UserMenu from 'routes/UserMenu';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Layout = () => {
  const isLoggedIn = useSelector(isAuthenticated);

  return (
    <Container fixed >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation/>
  
   
          </Typography>
          <Button color="inherit"> {isLoggedIn ? <UserMenu/> : <AuthNav/>}    </Button>
        </Toolbar>
      </AppBar>
             <Outlet/>
    </Box>
    </Container>
  );
};
export default Layout;