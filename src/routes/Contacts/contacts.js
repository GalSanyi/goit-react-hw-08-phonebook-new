import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'components/form';
import Filter from 'components/filter';
import ContactsList from 'components/contacts-list';
import Circles from 'components/spinner';
import { getIsLoading, getContacts } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';


function Contacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isFetching = useSelector(getIsLoading);

    useEffect(() => dispatch(fetchContacts()), [dispatch]);

    return(
        <>
            <Form />
            <Filter />
            { isFetching && <Circles /> }
            { contacts && <ContactsList /> }
        </>
    )
}
export default Contacts;