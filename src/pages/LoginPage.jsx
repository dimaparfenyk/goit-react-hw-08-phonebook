import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth/authOperation';
import {
  Label,
  FormInput,
  Button
} from '../components/ContactForm/ContactForm.styled';
import { Container } from './homePage.styled';

export default function LoginPage() {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
  
    <form onSubmit={handleSubmit}>
      <Container>
        <h2  style={{
          textAlign: 'center',
          marginBottom:'20px'
               }}>
                   Login page</h2>
        <Label>
          <FormInput
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            autocomplete="off"
          />
        </Label>

        <Label>
          <FormInput
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder="Password"
          />
        </Label>
        <Button type="submit">Log In</Button>
      </Container>
    </form>
    
  );
}
