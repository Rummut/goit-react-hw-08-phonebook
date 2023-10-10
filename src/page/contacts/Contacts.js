import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/contact-form/ContactForm';
import { ContactList } from 'components/contact-list/ContactList';
import { Container, Title, TitleContact } from './Contacts.styled';
import { GlobalStyle } from 'GlobalStyle';
import { Filters } from 'components/filters/Flters';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filters />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
}
