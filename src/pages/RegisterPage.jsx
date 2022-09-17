import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperation';
import {
  Label,
  FormInput,
  Button,
} from '../components/ContactForm/ContactForm.styled';
import { Container } from './homePage.styled';

export default function RegistrationPage() {
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <h2 style={{
            textAlign: 'center',
            marginBottom:'20px'
               }}>Register page</h2>
        <Label>
            <FormInput
              onChange={handleChange}
              type="text"
              name="name"
              value={name} 
              placeholder="Name"
              />
        </Label>

        <Label>
          <FormInput
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
          />
        </Label>

        <Label>
          <FormInput
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
          />
        </Label>
          <Button type="submit">Sign In</Button>
          </Container>
      </form>
    </>
  );
}
