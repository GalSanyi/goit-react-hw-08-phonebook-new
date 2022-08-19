import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
export default function Filter () {
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <Container fixed>
      
      <TextField
           autoFocus
        margin='dense'
         variant="standard"
         label="Find"
      
       
        required
      
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        value={filterValue}
      
      />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};


