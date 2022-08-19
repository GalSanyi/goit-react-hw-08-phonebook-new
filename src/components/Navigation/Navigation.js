import { useSelector } from 'react-redux';
import { isAuthenticated } from 'redux/auth/auth-selectors';
import {NavLink} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Navigation() {
  const isLoggedIn = useSelector(isAuthenticated);
    return (
        <Stack direction="row" spacing={2}>
        
        <NavLink to='/'><Typography variant="inherit"   color='#fff'>Home</Typography> </NavLink>
        {isLoggedIn &&<Typography variant="h6" color="error "> <NavLink to='/contacts'><Typography variant="inherit"   color='#fff'> Contacts</Typography></NavLink> </Typography> }
        </Stack>
    )
}
export default Navigation;