import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import Container from '@mui/material/Container';
import { addContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };

  const changeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts) {
      const checkForName = contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase());
      const checkForNumber = contacts.find(contact => contact.number === number);

      if (checkForName) {
        Notiflix.Notify.failure(`${name.toLowerCase()} уже существует в книге контактов`);
        setName('');
        setNumber('');
        return;
      }

      if (checkForNumber) {
        Notiflix.Notify.failure('Такой номер телефона уже существует в книге контактов');
        setName('');
        setNumber('');
        return;
      }
    }

    dispatch(addContact({ name, number }));
      
    setName('');
    setNumber('');

    Notiflix.Notify.success('Контакт успешно создан!');
  }

  return (
    <Container fixed>
    <h1>Phonebook</h1>
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
       onChange={changeName}
     />
   
     <TextField
          autoFocus
       margin='dense'
        variant="standard"
         label="Phone mnumber"
       type="tel"
       name="number"
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
       value={number}
       onChange={changeNumber}
     />
     <Box>
     <Button type="submit" color='secondary' variant= 'outlined' >
       Добавить контакт
     </Button>
     </Box>
  </Stack>
        </Box>
      
   </form>
   </Container>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};


