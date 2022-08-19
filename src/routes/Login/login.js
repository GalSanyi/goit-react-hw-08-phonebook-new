import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { login } from 'redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');

  }

  return (
    
    <Container fixed>
     <h1>Страница логина</h1> 
     <form onSubmit={handleSubmit} >
      <Box sx={{ width: '50%' }}>
      <Stack spacing={2} >
      <TextField
        autoFocus
        margin='dense'
         variant="standard"
          label="email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
          <TextField
        
        autoFocus
      margin='dense'
       variant="standard"
      id="outlined-basic"
       label="Password"
        autoComplete="current-password"
        type="password"
        name="password"
        required
        value={password}
        onChange={handleChange}
      />
      <Box>
       <Button type="submit" color='secondary' variant= 'outlined' >
          Войти
        </Button>
        </Box>
      </Stack>
    </Box>
       
        </form>

    </Container>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};


