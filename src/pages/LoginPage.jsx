import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';

import { Label, Container, FormInput, Button } from "components/ContactForm/ContactForm.styled";

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
               }}>
                   Login page</h2>
           
               <Label>
                   Email
                   <FormInput
                       type="email"
                       name="email"
                       value={email}
                       placeholder="Email"
                        onChange={handleChange}
                   />
               </Label>
               <Label>
                   Password
                   <FormInput
                       type="password"
                       name="password"
                       placeholder="Password"
                       value={password}
                        onChange={handleChange}
                   />
               </Label>
                   <Button type="submit">Login</Button>           
           </Container>
           </form>
   );
}