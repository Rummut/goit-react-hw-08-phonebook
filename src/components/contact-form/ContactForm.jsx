import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const handleContactsAdd = newContact => {
    const { name } = newContact;
    const isNameContain = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameContain) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, number }));
  };
  const handleOnSubmitForm = event => {
    event.preventDefault();
    handleContactsAdd({ id: nanoid(), name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleOnSubmitForm}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          placeholder="Your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Number
        <Input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
