import { NavLinkStyled, NavBox} from './AuthNav.styled';

export const AuthNav = () => (
        <NavBox>
          <NavLinkStyled to="/register">Register</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
        </NavBox>
  );

