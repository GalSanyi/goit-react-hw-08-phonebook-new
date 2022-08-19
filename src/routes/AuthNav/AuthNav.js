import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
  import Stack from '@mui/material/Stack';
function AuthNav() {

  return (
    <Stack direction="row" spacing={2}>
            <NavLink to="/registration">
            <Typography variant="inherit"   color='#fff'> Registration</Typography>
            </NavLink>
                  
            <NavLink to="/login" >
            <Typography variant="inherit"   color='#fff'> Login</Typography>
            </NavLink>
            </Stack>
  );
}
export default AuthNav;