import { useSelector, useDispatch } from 'react-redux';
// import s from './contactsList-styles.module.css';
import List from '@mui/material/List';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

   const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
    const filtered = contacts ? getVisibleContacts(contacts) : [];
    return (
      <Container fixed>
      <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={4}>
        {filtered && filtered.map(({ name, number, id }) => {
          return (
            <List key={id} >
            <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={4}>
              
             
                <Typography> {name}  </Typography>
               
              
        </Grid>
      <Grid item xs={4}>
              
            
                <Typography>  {number}</Typography>
              
        </Grid>
      
         <button
                type="button"
                onClick={() => dispatch(deleteContact(id))}
                
              >
                <DeleteIcon/>
              </button>  
       
    </Grid>
             
            </List>
          );
        })}
      
     
        </Grid>
    </Grid>
    </Container>
    );
}




