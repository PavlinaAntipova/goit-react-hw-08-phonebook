import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-operations';
import { BallTriangle } from  'react-loader-spinner'


import ContactItem from '../ContactItem';
import s from './ContactsList.module.css';

function ContactsList() {
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const contacts = useSelector(state => {
    const initState = state.contacts.items;
      const normalizeName = filter.toLocaleLowerCase();
      const filteredContacts = initState.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeName));
    return filteredContacts;
  });
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  
  return (
    <div className={s.Contacts}>
      <h2 className={s.title}>Contacts</h2>

      {isLoading && <BallTriangle color="#00BFFF" height={100} width={100} />}
      {error && <p>Opps, something went wrong</p>}
      {!contacts.length && !isLoading && !error &&<p>No contacts here</p>}
      {contacts.length > 0 && !isLoading && <ul>{ contacts.map(contact => (
            <ContactItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.phone}
              />
            )) }</ul>}
  
    </div>
  );
}

export default ContactsList;

