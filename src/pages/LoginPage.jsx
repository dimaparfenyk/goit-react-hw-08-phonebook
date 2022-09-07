import { Label, Container,FormInput,Button } from "components/ContactForm/ContactForm.styled";

export default function LoginPage() {
   return (
      <form >
       <Container>
           <h1>Login page</h1>
           
               <Label>
                   Email
                   <FormInput
                       type="email"
                       name="email"
                       placeholder="email"
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
                   <Button type="submit">Login</Button>           
           </Container>
           </form>
   );
}