import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from 'redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Registration() {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
      
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
  <div>
  
    <h1>Страница регистрации</h1>

    <form onSubmit={handleSubmit}>
    <Box sx={{ width: '50%' }}>
    <Stack spacing={2} >
      <TextField
        autoFocus
      margin='dense'
       variant="standard"
        label="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
      />
      
      <TextField
         autoFocus
      margin='dense'
       variant="standard"
        label='email'
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
        label='password'
        type="password"
        name="password"
        required
        value={password}
        onChange={handleChange}
       />
       <Box>
       <Button type="submit" color='secondary' variant= 'outlined' >
        Зарегистрироваться
       </Button>
       </Box>
       </Stack>
       </Box>
     
      </form>

  </div>
  );
}

Registration.propTypes = {
  onSubmit: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.object),
};


