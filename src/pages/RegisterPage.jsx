import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth/auth-operations';
import { Label, Container, FormInput, Button } from "components/ContactForm/ContactForm.styled";

export default function RegisterPage() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(authOperations.registerUser({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    }
    return (<>
       <form onSubmit={handleSubmit}>
       <Container>
           <h2 style={{
                   textAlign: 'center',
               }}>Register page</h2>
           
               <Label>
                   Name
                   <FormInput
                       type="name"
                       name={name}
                       placeholder="Name"
                       onChange={e=>setName(e.target.value)}
                   />
               </Label>
               <Label>
                   Email
                   <FormInput
                       type="email"
                       name={email}
                       placeholder="Email"
                       onChange={e=>setEmail(e.target.value)}
                   />
               </Label>
               <Label>
                   Password
                   <FormInput
                       type="password"
                       name={password}
                       placeholder="Password"
                       onChange={e=>setPassword(e.target.value)}
                   />
               </Label>            
                   <Button type="submit">Register</Button>                       
           </Container>
        </form>
        </>
   );
};