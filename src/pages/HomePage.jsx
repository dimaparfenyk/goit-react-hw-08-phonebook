import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
import { Title, Container, Box } from './homePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
   
    <Container>
      {isLoggedIn && (<Title>Congratulation! Now you may create your personal phonebook.
      </Title>)}
      {!isLoggedIn && (
        <>
          <Title>Hello! Please,
            to start work with our service Log in or Register
          </Title>
          <Box>
            <NavLinkStyled
              style={{ marginRight: '20px' }}
              to="/login">
              Log in
            </NavLinkStyled>
            <NavLinkStyled to="/register">
              Register
            </NavLinkStyled>
          </Box></>)}
    </Container>
  );
};
    
