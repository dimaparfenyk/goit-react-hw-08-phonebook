import { Label, Container,FormInput,Button } from "components/ContactForm/ContactForm.styled";

export default function RegisterPage() {
   return (
       <form >
       <Container>
           <h1>Register page</h1>
           
               <Label>
                   Name
                   <FormInput
                       type="name"
                       name="name"
                       placeholder="Name"
                   />
               </Label>
               <Label>
                   Email
                   <FormInput
                       type="email"
                       name="email"
                       placeholder="Email"
                   />
               </Label>
               <Label>
                   Password
                   <FormInput
                       type="password"
                       name="password"
                       placeholder="password"
                   />
               </Label>            
                   <Button type="submit">Sign up</Button>                       
           </Container>
            </form>
   );
};